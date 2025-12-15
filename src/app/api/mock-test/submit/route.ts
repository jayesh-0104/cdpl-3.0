import { NextResponse } from "next/server";
import { getCourseBySlug } from "@/lib/mock-db";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { userDetails, answers, courseSlug } = body;

        const course = await getCourseBySlug(courseSlug);

        if (!course) {
            return NextResponse.json({ error: "Course not found" }, { status: 404 });
        }

        // Calculate Score
        let score = 0;
        course.questions.forEach((q) => {
            if (answers[q.id] === q.correctAnswer) {
                score++;
            }
        });

        const totalQuestions = 30;
        const percentage = Math.round((score / totalQuestions) * 100);

        // Featured Text Logic
        let featuredText = "";
        let featuredColor = "";
        let featuredEmoji = "";

        if (percentage >= 80) {
            featuredText = "Outstanding Performance!";
            featuredColor = "#10b981"; // Emerald
            featuredEmoji = "🏆";
        } else if (percentage >= 60) {
            featuredText = "Great Job!";
            featuredColor = "#3b82f6"; // Blue
            featuredEmoji = "🌟";
        } else {
            featuredText = "Keep Learning!";
            featuredColor = "#f59e0b"; // Amber
            featuredEmoji = "📚";
        }

        // Configure Transporter (Same as register route)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // App Base URL for Buttons
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://cinutedigital.com";

        const mailOptions = {
            from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
            to: userDetails.email,
            subject: `Your Result: ${course.name}`,
            html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mock Test Result</title>
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    </style>
    <!--<![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;">
    <div style="width: 100%; background-color: #f8fafc; padding: 40px 0;">
        <center>
            <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); max-width: 600px; width: 100%; text-align: center;">
                
                <!-- Modern Dark Header -->
                <tr>
                    <td style="background-color: #0f172a; padding: 40px 30px; background-image: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);">
                        <p style="color: #94a3b8; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 10px;">Mock Test Assessment</p>
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">${course.name}</h1>
                    </td>
                </tr>

                <!-- Content Body -->
                <tr>
                    <td style="padding: 40px 30px;">
                        
                        <!-- Score Circle (Visual) -->
                        <div style="margin-bottom: 25px;">
                            <div style="display: inline-block; width: 120px; height: 120px; border-radius: 50%; border: 6px solid ${featuredColor}; line-height: 120px; text-align: center; background-color: #fff;">
                                <span style="font-size: 36px; font-weight: 800; color: #0f172a;">${percentage}%</span>
                            </div>
                        </div>

                        <!-- Featured Text -->
                        <h2 style="margin: 0 0 10px; color: ${featuredColor}; font-size: 28px; font-weight: 800;">${featuredText} ${featuredEmoji}</h2>
                        <p style="margin: 0 0 30px; color: #64748b; font-size: 16px;">
                            You scored <strong>${score}</strong> out of <strong>${totalQuestions}</strong> questions.
                        </p>

                        <!-- Action Buttons -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                            <tr>
                                <td align="center">
                                    <!-- Primary Button: Retake / View -->
                                    <a href="${baseUrl}/mock-test/${courseSlug}" style="display: inline-block; background-color: #e84c13ff; color: #ffffff; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: 15px; margin: 5px; box-shadow: 0 4px 10px rgba(255, 107, 53, 0.3);">
                                        View Result / Retake
                                    </a>
                                    
                                    <!-- Secondary Button: Explore Courses -->
                                    <a href="${baseUrl}/courses" style="display: inline-block; background-color: #132c45ff; color: #ffffff; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: 15px; margin: 5px;">
                                        Explore All Courses
                                    </a>
                                </td>
                            </tr>
                        </table>

                        <p style="color: #4e535aff; font-size: 12px; margin-bottom: 0;">
                            Thank you for learning with us.
                        </p>

                    </td>
                </tr>

                <!-- Footer -->
                <tr>
                    <td style="background-color: #f8fafc; padding: 20px; border-top: 1px solid #e2e8f0;">
                         <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                            &copy; ${new Date().getFullYear()} Cinute Digital. All rights reserved.
                        </p>
                    </td>
                </tr>
            </table>
        </center>
    </div>
</body>
</html>
            `,
        };

        if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
            console.log("Attempting to send email to user...");
            try {
                await transporter.sendMail(mailOptions);
                console.log("User result email sent successfully!");
            } catch (sendError) {
                console.error("Failed to send user result email:", sendError);
                // Don't block the UI response
            }
        } else {
            console.warn("SMTP credentials missing, skipping user email.");
        }

        return NextResponse.json({ success: true, score });

    } catch (error) {
        console.error("Error processing submission:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
