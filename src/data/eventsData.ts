
import React from "react";

export const CDPL_ORG = {
  name: "Cinute Digital Pvt. Ltd. (CDPL)",
  logo: "/cdpl-logo.png",
  description:
    "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
} as const;

// Optional: a small base object you can spread into every event
const CDPL_BASE = {
  organization: CDPL_ORG.name,
  organizerLogoUrl: CDPL_ORG.logo,
  organizerDetails: CDPL_ORG.description,
} as const;

export interface PastEvent {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  location: string;
  organization: string;
  attendees: number;
  category: string;
  categoryColor: string;
  serviceType: string; // Links to service
  purpose: string;
  trainingDuration: React.ReactNode;
  sessionHighlights: {
    title: string;
    points: string[];
  }[];
  specialSession?: {
    speaker: string;
    topic: string;
    highlights: string[];
  };
  keyTakeaways: {
    title: string;
    description: string;
  }[];
  highlights: string[];
  imageUrl?: string;
  heroImageUrl?: string;
  success?: string;
  featured?: boolean;
  galleryCount?: number;
  videoUrl?: string;

  organizationImage: string;
  organizationWebsite?: URL;
  organizationFacebook?: URL;
  organizationInstagram?: URL;
  organizationTwitter?: URL;
  organizationYoutube?: URL;
  gallery?: string[];          // For Image Gallery section
  organizerDetails?: string;   // Extra organizer info (optional)
  organizationAbout?: URL;     // Extra organizer info (optional)

  venueTitle?: string;

  /** Primary venue image (logo/photo) */
  venueImageUrl?: string;

  /** Free-form venue description */
  venueDescription?: string;

  /** Optional: per-event fallback image if the primary is missing */
  venueFallbackImageUrl?: string;

  venueAddress?: string;
  lastModified?: string;

  // New fields for enhanced UI
  shareLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    whatsapp?: string;
  };
}

export const pastEvents: PastEvent[] = [
  {
    id: "business-analytics-course-aim",
    ...CDPL_BASE,
    slug: "business-analytics-course-at-aldel-institute-of-management",
    title: "Business Analytics Course at Aldel Institute of Management – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "01-01-2025 to 08-02-2025",
    location: "Aldel Institute of Management, Palghar",
    attendees: 65,
    category: "Course Conducted",
    categoryColor: "bg-blue-600",
    serviceType: "Lecture Series",
    purpose: "Cinute Digital Pvt. Ltd. (CDPL), the learning and development unit of Testriq QA Lab, successfully conducted a 30-hour Business Analytics Course at Aldel Institute of Management. Led by Ashish Shetty, Assistant Manager - Learning and Development, this course was designed to equip students with industry-relevant business analytics skills, helping them gain practical expertise in data visualization, analytics, and decision-making. The program aimed to provide hands-on experience with leading analytics tools such as Power BI and Tableau, ensuring participants develop data-driven problem-solving skills essential for careers in business intelligence and analytics.",
    trainingDuration: "The 30-hour intensive training program covered",
    sessionHighlights: [
      {
        title: "Introduction to Business Analytics",
        points: ["Understanding the fundamentals, key concepts, and applications across industries."]
      },
      {
        title: "Hands-on Training in Power BI",
        points: ["Learning data connection, data transformation, report building, and interactive dashboard creation."]
      },
      {
        title: "Tableau for Data Visualization",
        points: ["Mastering data storytelling, advanced charting techniques, and dashboard design."]
      },
      {
        title: "Real-World Sales Project",
        points: ["Students worked on a practical business case study, analyzing sales data and creating dynamic dashboards to derive actionable insights."]
      },
      {
        title: "Industry Applications & Case Studies",
        points: ["Understanding how business analytics drives decision-making in various industries, including retail, finance, and supply chain management."]
      },
    ],
    keyTakeaways: [
      {
        title: "Comprehensive understanding of quality assurance in software development",
        description: "Students gained hands-on experience in using industry-leading data visualization tools.",
      },
      {
        title: "Practical Business Analytics Knowledge",
        description: "The course provided real-world applications, ensuring students understand data-driven decision-making.",
      },
      {
        title: "Project-Based Learning",
        description: "The sales project and dashboard creation enhanced students' analytical skills, preparing them for real-world business challenges.",
      },
      {
        title: "Enhanced Career Prospects",
        description: "With exposure to modern analytics tools and methodologies, participants are now better equipped for roles in business intelligence, data analytics, and consulting.",
      },
    ],
    highlights: [
      "Hands-on QA Tools Demo",
      "Real-Time Project Workflow",
      "Career Path Exploration",
      "Office Tour"
    ],
    heroImageUrl: "/events/business-analytics-course-at-aldel-institute-of-management/AIM.png",
    success: "This successful collaboration between CDPL and Aldel Institute of Management reflects Testriq QA Lab’s commitment to bridging the gap between academia and industry, ensuring students develop in-demand skills for a data-driven future.",
    featured: true,
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 10, // Placeholder
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Aldel Institute of Management.",
    venueAddress: "Palghar, Maharashtra",
    venueDescription: "Aldel Institute of Management is an institute based in Palghar, Maharashtra.",
    venueImageUrl: "/events/business-analytics-course-at-aldel-institute-of-management/AIM-LOGO.png", // Fallback
  },
  {
    id: "mou-signing-st-francis-testriq",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "mou-signing-between-st-francis-institute-of-technology-and-testriq-qa-lab",
    title: "MoU Signing Between St. Francis Institute of Technology and Testriq QA Lab – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2024-03-27 to 2024-03-27",
    location: "St. Francis Institute of Technology, Mumbai",
    attendees: 50,
    category: "MoU Signing",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Partnership",
    purpose: "Testriq QA Lab has proudly signed a Memorandum of Understanding (MoU) with St. Francis Institute of Technology (SFIT) to strengthen industry-academia collaboration in the field of software testing and quality assurance. This strategic partnership aims to bridge the gap between theoretical education and practical industry demands by providing students with hands-on experience, expert guidance, and career-building opportunities. Cinute Digital Pvt. Ltd. (CDPL), the learning and development unit of Testriq QA Lab, will play a crucial role in delivering specialized training programs, workshops, and live projects to ensure students acquire industry-relevant skills.",
    trainingDuration: "The MoU signing ceremony was attended by distinguished representatives from both institutions",
    sessionHighlights: [
      {
        title: "Bro. Shantilal Kujur",
        points: ["Director, St. Francis Institute of Technology"]
      },
      {
        title: "Dr. Sincy George",
        points: ["Principal, St. Francis Institute of Technology"]
      },
      {
        title: "Dr. Minal Lopez",
        points: ["Faculty Representative, St. Francis Institute of Technology"]
      },
      {
        title: "Shoeb Shaikh",
        points: ["Head of Learning and Development, Testriq QA Lab"]
      },
      {
        title: "Ashish Shetty",
        points: ["Assistant Manager, Learning and Development, Testriq QA Lab"]
      }
    ],
    keyTakeaways: [
      {
        title: "Industry-Ready Skills",
        description: "Students will gain practical exposure to software testing and automation, ensuring they meet real-world industry demands.",
      },
      {
        title: "Bridging the Academia-Industry Gap",
        description: "The MoU strengthens collaboration between academia and the IT industry, enhancing learning outcomes.",
      },
      {
        title: "Enhanced Career Prospects",
        description: "With access to expert training, live projects, and mentorship, students will be well-prepared for roles in software testing and quality assurance.",
      },
      {
        title: "Commitment to Excellence",
        description: "This partnership reflects Testriq QA Lab and CDPL’s dedication to fostering innovation, skill development, and career excellence in the software testing domain.",
      }
    ],
    highlights: [
      "Industry-Oriented Training & Workshops",
      "Hands-On Learning with Live Projects",
      "Certification Programs",
      "Faculty Development Programs",
      "Internship & Career Guidance"
    ],
    heroImageUrl: "/events/mou-signing-between-st-francis-institute-of-technology-and-testriq-qa-lab/St.-Francis-MOU.png",
    success: "With this MoU, Testriq QA Lab, Cinute Digital Pvt. Ltd., and St. Francis Institute of Technology reaffirm their shared vision of empowering future engineers with cutting-edge industry knowledge and hands-on expertise.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "St. Francis Institute of Technology",
    venueAddress: "Mumbai, Maharashtra",
    venueDescription: "St. Francis Institute of Technology in Mumbai, India, is an engineering college named after Francis of Assisi, the 12th-century Italian saint. The college is accredited by the ISO and the National Board of Accreditation, approved by the AICTE, and affiliated with the University of Mumbai.",
    venueImageUrl: "/events/mou-signing-between-st-francis-institute-of-technology-and-testriq-qa-lab/st-francis-institute-of-technology.jpeg"
  },
  {
    id: "mou-signing-between-st-john-testriq",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "institutional-mou-signing-between-st-john-college-of-engineering-and-management-and-testriq-qa-lab",
    title: "Institutional MoU Signing Between St. John College of Engineering and Management and Testriq QA Lab – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2024-03-05 to 2024-03-05",
    location: "St. John Institute of Management and Research, Mumbai",
    attendees: 56,
    category: "MoU Signing",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Partnership",
    purpose: "Testriq QA Lab has officially signed an Institutional Memorandum of Understanding (MoU) with St. John College of Engineering and Management (SJCEM) to foster industry-academic collaboration in the field of software testing, quality assurance, and business intelligence applications. This partnership aims to provide students with hands-on training, industry exposure, and career development opportunities, bridging the gap between academic learning and industry demands. Cinute Digital Pvt. Ltd. (CDPL), the learning and development unit of Testriq QA Lab, will play a vital role in delivering specialized training programs, workshops, and live projects, ensuring students gain practical, job-ready skills in the rapidly evolving IT industry.",
    trainingDuration: "The MoU signing ceremony was attended by",
    sessionHighlights: [
      {
        title: "Dr. Gopal V. Mulgund",
        points: ["Principal, St. John College of Engineering and Management"]
      },
      {
        title: "Dr. Buddharatna Godbole",
        points: ["HOD, Civil Engineering, St. John College of Engineering and Management"]
      },
      {
        title: "Ashish Shetty",
        points: ["Assistant Manager, Learning and Development, Testriq QA Lab"]
      },
    ],
    keyTakeaways: [
      {
        title: "Practical Industry Exposure",
        description: "Students will gain real-world experience in software testing, automation, and business intelligence applications.",
      },
      {
        title: "Bridging the Academia-Industry Gap",
        description: "The MoU strengthens collaboration between SJCEM and Testriq QA Lab, ensuring students receive industry-relevant training.",
      },
      {
        title: "Enhanced Career Readiness",
        description: "Access to expert mentorship, live projects, and certifications will boost students' career prospects in IT and software quality assurance.",
      },
      {
        title: "Commitment to Excellence",
        description: "This partnership highlights Testriq QA Lab and CDPL’s dedication to empowering students with cutting-edge industry knowledge and hands-on expertise.",
      }
    ],
    highlights: [
      "Industry-Driven Training & Workshops",
      "Practical Exposure with Live Projects",
      "Certification Programs",
      "Faculty Development & Knowledge Sharing",
      "Internships & Career Guidance"
    ],
    heroImageUrl: "/events/institutional-mou-signing-between-st-john-college-of-engineering-and-management-and-testriq-qa-lab/St-john-institute-Mou.png",
    success: "With this MoU, Testriq QA Lab, Cinute Digital Pvt. Ltd., and St. John College of Engineering and Management reaffirm their commitment to nurturing future IT professionals through quality training, innovation, and skill development.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "St. John Institute of Management and Research",
    venueAddress: "Mumbai, Maharashtra",
    venueDescription: "St. John Institute of Management and Research (SJIMR), established in 2007, is located in Palghar, Maharashtra. Affiliated with the University of Mumbai, it offers undergraduate and postgraduate programs, including BE and MMS. The college provides modern infrastructure, skilled faculty, and focuses on practical skills and industry readiness. SJIMR emphasizes holistic development and has a strong placement record, making it a great choice for students aiming to excel in their careers.",
    venueImageUrl: "/events/institutional-mou-signing-between-st-john-college-of-engineering-and-management-and-testriq-qa-lab/st-john-college.png"
  },
  {
    id: "mou-signing-between-vidyavardhini-testriq",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "mou-signing-between-vidyavardhini-college-of-engineering-and-testriq-qa-lab",
    title: "MoU Signing Between Vidyavardhini College of Engineering and Testriq QA Lab – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2025-02-11 to 2025-02-11",
    location: "Vidyavardhini College of Engineering, Vasai West, Vasai-Virar, Maharashtra 401202",
    attendees: 57,
    category: "MoU Signing",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Partnership",
    purpose: "Testriq QA Lab proudly signed a Memorandum of Understanding (MoU) with Vidyavardhini College of Engineering, marking a significant step toward strengthening industry-academic collaboration in the field of software testing and quality assurance. The MoU aims to facilitate knowledge sharing, skill development, and career opportunities for engineering students, ensuring they are equipped with the latest industry-relevant expertise. Cinute Digital Pvt. Ltd. (CDPL), the learning and development unit of Testriq QA Lab, will play a key role in delivering training, workshops, and hands-on learning experiences under this collaboration.",
    trainingDuration: "The formal MoU signing ceremony was graced by esteemed dignitaries, including",
    sessionHighlights: [
      {
        title: "Dr. Rakesh Himte",
        points: ["Principal, Vidyavardhini College of Engineering"]
      },
      {
        title: "Dr. Dinesh Patil",
        points: ["Faculty Representative, Vidyavardhini College of Engineering"]
      },
      {
        title: "Shoeb Shaikh",
        points: ["Head of Learning and Development, Testriq QA Lab"]
      },
      {
        title: "Ashish Shetty",
        points: ["Assistant Manager, Learning and Development, Testriq QA Lab"]
      },
    ],
    keyTakeaways: [
      {
        title: "Empowering Future Engineers",
        description: "Students will gain practical exposure to software testing, preparing them for rewarding careers in the IT industry.",
      },
      {
        title: "Strengthening Industry-Academic Collaboration",
        description: "The MoU fosters synergy between academia and industry, ensuring engineering students acquire job-ready skills.",
      },
      {
        title: "Enhanced Learning Opportunities",
        description: "Access to expert training, live projects, and career guidance through CDPL, ensuring a comprehensive learning experience.",
      },
      {
        title: "Commitment to Excellence",
        description: "This partnership underscores Testriq QA Lab and CDPL’s dedication to nurturing talent and bridging the skill gap in software testing and quality assurance.",
      }
    ],
    highlights: [
      "Industry-Aligned Training & Workshops",
      "Live Projects & Internships",
      "Certification Programs",
      "Faculty Development Initiatives",
      "Placement Support & Career Guidance"
    ],
    heroImageUrl: "/events/mou-signing-between-vidyavardhini-college-of-engineering-and-testriq-qa-lab/MoU-Vartak-MOU.png",
    success: "With this MoU, Testriq QA Lab, Cinute Digital Pvt. Ltd., and Vidyavardhini College of Engineering reaffirm their commitment to fostering innovation, skill development, and career excellence in the field of software testing.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Vidyavardhini's College of Engineering and Technology – Cinute Digital Pvt. Ltd",
    venueAddress: "Vasai West, Vasai-Virar, Maharashtra 401202",
    venueDescription: "Vidyavardhini’s College of Engineering and Technology (VCET) in Vasai, Maharashtra, is a well-regarded engineering institution affiliated with the University of Mumbai. Established in 1994, VCET offers undergraduate programs in fields like Computer Science, Mechanical, Civil, and Electronics Engineering. Known for its quality education and modern facilities, the college provides a supportive learning environment with advanced labs and experienced faculty. Its active placement cell helps students secure roles in leading companies, making VCET a solid choice for engineering education in the Mumbai region.",
    venueImageUrl: "/events/mou-signing-between-vidyavardhini-college-of-engineering-and-testriq-qa-lab/Vidyavardhini-college.png"
  },
  {
    id: "ismail-yusuf-college-site-visit-seminar",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "ismail-yusuf-college-site-visit-seminar-careers-in-software-testing-and-data-science",
    title: "Ismail Yusuf College Site Visit & Seminar: Careers in Software Testing and Data Science – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2025-02-18 to 2025-02-18",
    location: "Ismail Yusuf College Arts, Science and Commerce",
    attendees: 62,
    category: "MoU Signing",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Partnership",
    purpose: "Cinute Digital Pvt. Ltd. (CDPL) had the privilege of hosting students from the Department of Statistics, B.Sc., Government of Maharashtra’s Ismail Yusuf College, for a site visit and an insightful seminar on Careers in Software Testing and Data Science. The visit aimed to bridge the gap between academic learning and industry expectations, offering students a deeper understanding of career opportunities in the IT sector. Guided by their faculty, students explored the dynamic world of software testing and data science, gaining valuable industry insights.",
    trainingDuration: "The seminar was structured to provide a comprehensive overview of software testing and data science, covering",
    sessionHighlights: [
      {
        title: "Introduction to Software Testing",
        points: ["Fundamentals of manual and automation testing, career paths, and industry demand."]
      },
      {
        title: "Quality Assurance in IT",
        points: ["The role of QA professionals, software development life cycle (SDLC), and modern testing tools."]
      },
      {
        title: "Data Science & Its Applications",
        points: ["Basics of data science, real-world use cases, and its significance in decision-making."]
      },
      {
        title: "Career Pathways & Growth Opportunities",
        points: ["Skills required, certifications, and industry expectations for aspiring professionals."]
      },
      {
        title: "Live Demonstrations & Industry Insights",
        points: ["Practical exposure to testing tools and data science applications, enhancing learning beyond textbooks."]
      },
    ],
    keyTakeaways: [
      {
        title: "Practical Knowledge",
        description: "Students gained hands-on insights into software testing and data science, understanding their real-world applications.",
      },
      {
        title: "Career Guidance",
        description: "The session provided clarity on career prospects, essential skills, and industry demands in these growing fields.",
      },
      {
        title: "Industry Exposure",
        description: "First-hand experience of how professional training institutes like CDPL prepare individuals for IT careers.",
      },
      {
        title: "Networking Opportunity",
        description: "Students interacted with industry experts, broadening their perspective on the evolving tech landscape.",
      }
    ],
    highlights: [
      "The interactive session allowed students to engage with industry experts, ask questions, and explore how software testing and data science are shaping the future of technology.",
    ],
    heroImageUrl: "/events/ismail-yusuf-college-site-visit-seminar-careers-in-software-testing-and-data-science/Ismil-Yusuf-Bsc.png",
    success: "This event reinforced Cinute Digital Pvt. Ltd.'s commitment to empowering future professionals with the knowledge and skills required to excel in the IT industry.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Ismail Yusuf College Arts, Science and Commerce – Cinute Digital Pvt. Ltd",
    venueAddress: "Jogeshwari, Maharashtra",
    venueDescription: "Ismail Yusuf College, is the fourth oldest college of Mumbai, India. “I Y college”, as it is popularly known, is managed by the Government of Maharashtra. It is the oldest college in North Mumbai. It was established in 1930 with a large donation from Sir Mohammed Yusuf Ismail, K.T. on Jogeshwari Hill. The foundation stone was laid by Sir Leslie Orme Wilson, Governor of Bombay in 1924.",
    venueImageUrl: "/events/ismail-yusuf-college-site-visit-seminar-careers-in-software-testing-and-data-science/ismail-yusuf-college.png"
  },
  {
    id: "future-ready-careers-bhavans-college-andheri",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "faculty-development-program-fdp-on-power-bi-tableau-unlocking-future-ready-careers-bhavans-college-andheri",
    title: "Faculty Development Program (FDP) on Power BI & Tableau – Unlocking Future-Ready Careers: Bhavan’s College Andheri – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2025-02-24 to 2025-02-24",
    location: "Bhavan’s College Andheri",
    attendees: 111,
    category: "Career Guidance Seminar",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Business Intelligence",
    purpose: "In the evolving digital landscape, data analytics and visualization are no longer just technical skills-they are essential competencies for professionals across industries. The Faculty Development Program (FDP) on Power BI & Tableau, organized by Bhavan’s College, Andheri (West), Department of Computer Science in collaboration with IQAC and CDPL, aimed to equip educators and professionals with cutting-edge knowledge of Business Intelligence (BI) tools to enhance their teaching and research capabilities.",
    trainingDuration: "The FDP provided an interactive and hands-on learning experience, covering",
    sessionHighlights: [
      {
        title: "Introduction to Business Intelligence & Its Growing Importance",
        points: ["How BI is transforming industries like finance, healthcare, marketing, and education", "The role of data-driven decision-making in research and academic projects"]
      },
      {
        title: "Deep Dive into Power BI & Tableau",
        points: ["Creating interactive dashboards and data visualizations", "Hands-on training on DAX (Data Analysis Expressions) and Power Query for advanced data manipulation", "Exploring real-world applications of BI in academia and industry"]
      },
      {
        title: "Preparing Students for Future-Ready Careers",
        points: ["Understanding industry expectations for data analysts and BI professionals", "Strategies for integrating BI tools into coursework and research", "Career pathways in data analytics, visualization, and AI-driven decision-making"]
      },

    ],
    keyTakeaways: [
      {
        title: "Data analytics is the future",
        description: "Equipping students and professionals with BI skills is critical for career success.",
      },
      {
        title: "Power BI & Tableau",
        description: "Educators must integrate Power BI & Tableau into their curriculum to prepare students for data-driven job roles.",
      },
      {
        title: "Real-world datasets",
        description: "Hands-on experience with real-world datasets is essential to bridge the gap between theory and industry demands.",
      },
    ],
    highlights: [
      "Empowering faculty members with practical BI skills to integrate into academic curriculum",
      "Introducing Power BI & Tableau as essential tools for data-driven decision-making",
      "Exploring career opportunities in data analytics and how educators can prepare students for the future job market"
    ],
    heroImageUrl: "/events/faculty-development-program-fdp-on-power-bi-tableau-unlocking-future-ready-careers-bhavans-college-andheri/bhavan-college-program.webp",
    success: "This FDP reinforced the importance of continuous learning and upskilling in BI tools, ensuring that educators and professionals stay ahead in an increasingly data-centric world.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Bhavans College Andheri – Cinute Digital Pvt. Ltd",
    venueAddress: "Andheri, Maharashtra",
    venueDescription: "Bhavan’s College is a college located nearby Azad Nagar Metro Station in Andheri West, a neighborhood in western Mumbai, India. It primarily offers higher secondary (junior college) and undergraduate (bachelor’s) courses. There a few postgraduate and PhD programs too. It also include various types of fest, games, curricular activity etc.",
    venueImageUrl: "/events/faculty-development-program-fdp-on-power-bi-tableau-unlocking-future-ready-careers-bhavans-college-andheri/bhavan-college-logo.webp"
  },
  {
    id: "national-conference-mkes-trust-nagindas-khandwala-college",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "national-conference-on-applications-of-ai-promises-perils-and-sustainability-mkes-trust-nagindas-khandwala-college",
    title: "National Conference on Applications of AI: Promises, Perils, and Sustainability: MKES Trust Nagindas Khandwala College – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2025-02-14 to 2025-02-14",
    location: "MKES Trust Nagindas Khandwala College",
    attendees: 85,
    category: "Career Guidance Seminar",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Artificial Intelligence and Machine Learning (AI-ML)",
    purpose: "Artificial Intelligence (AI) is no longer just a futuristic concept—it is transforming industries, businesses, and human interactions in real time. However, with rapid advancements in AI, new challenges arise, including ethical concerns, bias, and governance issues.",
    trainingDuration: "The session covered a comprehensive overview of AI and its industrial impact",
    sessionHighlights: [
      {
        title: "Introduction to Generative AI and Large Language Models (LLMs)",
        points: ["How AI models learn from data and generate human-like responses", "The potential of LLMs in automating content creation, customer support, and data analysis", "Limitations of LLMs: Bias, misinformation, and ethical concerns"]
      },
      {
        title: "Applications of AI-Driven Business Intelligence (BI) for Decision-Making",
        points: ["AI-powered predictive analytics for market trends and customer behavior", "AI in fraud detection and cybersecurity", "Real-world case studies of companies leveraging AI for competitive advantage"]
      },
      {
        title: "The Ethical and Governance Challenges in AI Adoption",
        points: ["How AI bias and misinformation can lead to flawed decision-making", "The role of government policies and regulations in AI governance", "Discussing AI ethics and responsible AI development"]
      },
      {
        title: "Case Studies on AI-Driven Automation in Industry",
        points: ["How AI is being used in healthcare, finance, and manufacturing", "The role of AI in automating supply chains and logistics", "How businesses are balancing AI-driven automation with human oversight"]
      },
    ],
    keyTakeaways: [
      {
        title: "Replacement for human intelligence",
        description: "✔ AI is not a replacement for human intelligence but an amplifier of it",
      },
      {
        title: "Adopt AI responsibly",
        description: "Businesses that adopt AI responsibly will gain a competitive edge",
      },
      {
        title: "Critical for sustainability and trust",
        description: "Ethical AI development is critical for sustainability and trust",
      },
      {
        title: "Right balance of AI",
        description: "The right balance of AI and human expertise is the key to long-term AI adoption",
      },
    ],
    highlights: [
      "How AI is reshaping industries with automation and predictive analytics",
      "The opportunities and risks of integrating AI into business operations",
      "The impact of LLMs like ChatGPT and Bard on productivity, creativity, and decision-making",
      "Ethical dilemmas and governance challenges in AI adoption"
    ],
    heroImageUrl: "/events/national-conference-on-applications-of-ai-promises-perils-and-sustainability-mkes-trust-nagindas-khandwala-college/mkes-nagindas-program.webp",
    success: "AI is here to stay. The question is: How will we use it? The answer lies in responsible AI adoption, continuous learning, and a commitment to ethical AI practices.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Nagindas Khandwala College – Cinute Digital Pvt. Ltd",
    venueAddress: "Mumbai, Maharashtra",
    venueDescription: "Nagindas Khandwala College is conferred with autonomous status by the UGC from the year 2016-17. To its credit the college has secured A grade by NAAC(4th Cycle) and recieved Empowered Autonomous Status and is the first state Cluster Universuty approved. The college is fourth under Arts, Science and Commerce Colleges to be autonomous under the University of Mumbai. The college has 27 UG, 15 PG and 4 Ph.D. programmes. 40 % of the faculty members are Ph.D. of which 25% are Research Guides.",
    venueImageUrl: "/events/national-conference-on-applications-of-ai-promises-perils-and-sustainability-mkes-trust-nagindas-khandwala-college/mkes-nagindas.png"
  },
  {
    id: "5-days-faculty-development-program-software-of-civil-engineering",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "5-days-faculty-development-program-on-management-software-of-civil-engineering",
    title: "5-Day Faculty Development Program on Management Software of Civil Engineering – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2025-02-11 to 2025-02-15",
    location: "Online Event",
    attendees: 87,
    category: "Career Guidance Seminar",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Artificial Intelligence and Machine Learning (AI-ML)",
    purpose: "Civil engineering projects generate vast amounts of data, from site surveys to material procurement and project timelines. Yet, this data often remains underutilized due to the lack of proper analytical tools. The session aimed to introduce Business Intelligence (BI) in Civil Engineering, focusing on how data visualization and analytics can help professionals make better decisions.",
    trainingDuration: "The session covered several key aspects of BI in Civil Engineering",
    sessionHighlights: [
      {
        title: "Introduction to Business Intelligence (BI) and its Role in Civil Engineering",
        points: ["The importance of data analytics in construction and infrastructure projects", "Challenges in traditional project monitoring and decision-making", "How BI tools can transform data into actionable insights"]
      },
      {
        title: "Live Demonstration of Tableau for Civil Engineering Applications",
        points: ["Visualizing construction project timelines", "Identifying potential delays and risks in ongoing projects", "Forecasting budget overruns and resource allocation"]
      },
      {
        title: "Case Studies on Business Intelligence in Construction Projects",
        points: ["A real-world example of how BI helped prevent cost overruns in a large-scale infrastructure project", "How predictive analytics improved safety measures on construction sites", "The impact of BI dashboards in improving project reporting and compliance"]
      },
      {
        title: "Discussion on Integrating BI with IoT, GIS, and AI for Smarter Infrastructure Management",
        points: ["How smart sensors (IoT) can feed real-time construction data into BI tools", "Using GIS (Geographic Information Systems) to analyze site conditions", "Leveraging AI-powered analytics for predictive maintenance of infrastructure"]
      },
      {
        title: "Q&A and Industry-Academia Collaboration",
        points: ["Open discussion with faculty and researchers on implementing BI in academic research and real-world projects", "Exploring the need for BI training programs in civil engineering education"]
      },
    ],
    keyTakeaways: [
      {
        title: "Project efficiency",
        description: "Improve project efficiency through better tracking",
      },
      {
        title: "Identifying potential failures early",
        description: "Reduce risks by identifying potential failures early",
      },
      {
        title: "Material usage and resource allocation",
        description: "Optimize material usage and resource allocation",
      },
      {
        title: "Data-driven decisions",
        description: "Make data-driven decisions that improve sustainability",
      },
    ],
    highlights: [
      "Better project tracking",
      "Risk identification and mitigation",
      "Optimization of resources and cost management",
      "Data-driven decision-making for infrastructure planning",
      "By integrating BI tools with civil engineering, professionals can improve accuracy, efficiency, and sustainability in their projects."
    ],
    heroImageUrl: "/events/5-days-faculty-development-program-on-management-software-of-civil-engineering/National-Conference-PRP-2025.jpg",
    success: "The future of civil engineering is digital, and data analytics is at its core. BI tools will play a crucial role in shaping the next generation of smart infrastructure and more efficient project management.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Pravin Patil College of Diploma Engineering and Technology – Cinute Digital Pvt. Ltd",
    venueAddress: "Bhayandar, Maharashtra",
    venueDescription: "The Pravin Patil Polytechnic is affiliated to the Maharashtra State Board of Technical Education, Recognised by DTE Maharashtra State and approved by A.I.C.T.E. New Delhi, provides Diploma Courses in Information Technology, Computer Engineering, Electronics & Tele-Communication, Civil Engineering, Electrical Engineering, Mechanical Engineering leading to certificate in Diploma by the Maharashtra State Board of Technical Education Mumbai.",
    venueImageUrl: "/events/5-days-faculty-development-program-on-management-software-of-civil-engineering/logo-prp-college.webp"
  },
  {
    id: "navigating-the-world-of-data-science",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "navigating-the-world-of-data-science-and-emerging-career-paths",
    title: "Navigating the World of Data Science and Emerging Career Paths – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2023-08-25",
    location: "Lords Universal College - Goregaon, Mumbai",
    attendees: 50,
    category: "Career Guidance Seminar",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Data Science",
    purpose: "The Navigating the World of Data Science session provided a comprehensive overview of the rapidly growing field of data science and its potential for transformative career opportunities. This one-day event aimed to demystify data science concepts, showcase emerging trends, and guide participants in building a robust career roadmap in this exciting domain.",
    trainingDuration: "The event featured an engaging mix of expert-led discussions, interactive activities, and real-world case studies",
    sessionHighlights: [
      {
        title: "Introduction to Data Science",
        points: ["A deep dive into the fundamentals of data science, its impact across industries, and the growing demand for skilled professionals."]
      },
      {
        title: "Emerging Trends",
        points: ["Insights into cutting-edge technologies, including machine learning, AI, big data analytics, and their applications in fields like healthcare, finance, and retail."]
      },
      {
        title: "Skill-Building Workshop",
        points: ["Hands-on exercises focusing on essential tools and programming languages, such as Python, R, and SQL, with real-world data manipulation tasks."]
      },
      {
        title: "Career Guidance",
        points: ["Exploring diverse roles like data analyst, machine learning engineer, business intelligence developer, and strategies to upskill and stay ahead in the industry."]
      },
      {
        title: "Industry Case Studies",
        points: ["A showcase of successful data science projects that solved complex challenges and created significant value for organizations."]
      },
      {
        title: "Networking and Q&A",
        points: ["An open forum for participants to interact with experts, resolve doubts, and seek advice tailored to their career goals."]
      },
    ],
    keyTakeaways: [
      {
        title: "Understanding of Data Science Fundamentals",
        description: "A clear picture of the role data science plays in shaping decisions and driving innovation.",
      },
      {
        title: "Career Path Awareness",
        description: "Clarity on various roles, required skills, and certification paths to excel in data science.",
      },
      {
        title: "Practical Experience",
        description: "Exposure to tools, techniques, and the application of data science through hands-on exercises.",
      },
      {
        title: "Networking Opportunities",
        description: "Connections with industry professionals and like-minded peers to foster collaboration and mentorship.",
      },
      {
        title: "Career Path Awareness",
        description: "The 65 participants left inspired and ready to embark on their data science journey with confidence and determination.",
      },
    ],
    highlights: [],
    heroImageUrl: "/events/navigating-the-world-of-data-science-and-emerging-career-paths/Navigating-the-World-of-Data-Universal-College.png",
    success: "Step into the World of Data Science with Cinute Digital Pvt. Ltd.! Enroll in our certification courses for in-demand skills like Python programming, machine learning, and big data analytics. Attend our workshops and training programs to gain practical expertise and industry exposure. Visit Cinute Digital Pvt. Ltd. to explore how we empower individuals to excel in the data-driven world. Your data science career begins here—unlock endless possibilities with us!",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Lords Universal College – Cinute Digital Pvt. Ltd",
    venueAddress: "Goregaon, Mumbai",
    venueDescription: "Lords Universal College, established in 2004 in Goregaon (West), Mumbai, is a Gujarati Linguistic Minority Institution affiliated with the University of Mumbai. It offers undergraduate programs in commerce, management, IT, microbiology, and mass communication, focusing on quality education and holistic development.",
    venueImageUrl: "/events/navigating-the-world-of-data-science-and-emerging-career-paths/Universal-college-logo.jpg"
  },
  {
    id: "navigating-the-world-of-data-science",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "internship-program-dj-sanghvi-college",
    title: "Internship Program - DJ Sanghvi College – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2023-04-15",
    location: "SVKM’s Dwarkadas J. Sanghvi College of Engineering (DJSCE) - Vile Parle, Mumbai",
    attendees: 34,
    category: "Internship Program",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Data Science",
    purpose: "The Internship Program at DJ Sanghvi College of Engineering was designed to bridge the gap between theoretical education and real-world industry practices. With 105 participants, this initiative aimed to equip students with the skills, knowledge, and confidence required to excel in the dynamic IT and engineering sectors. The program provided a comprehensive overview of industry demands while fostering hands-on learning experiences to prepare students for future careers.",
    trainingDuration: "The program was crafted to ensure a balance of technical knowledge, practical exposure, and career readiness",
    sessionHighlights: [
      {
        title: "Introduction to Internship Opportunities",
        points: ["An overview of internship programs available in leading industries, their structure, and benefits in terms of career growth and skill development."]
      },
      {
        title: "Technical Skills Development",
        points: ["Sessions on automation testing, software development lifecycle (SDLC), and emerging tools like Selenium and Postman for hands-on application."]
      },
      {
        title: "Industry Insights",
        points: ["Interactive discussions with professionals on current trends in AI, IoT, and cybersecurity, helping students align their skills with industry needs."]
      },
      {
        title: "Career Guidance Workshop",
        points: ["A focused segment on building strong resumes, mastering interviews, and understanding what recruiters look for in potential interns."]
      },
      {
        title: "Case Studies and Live Projects",
        points: ["Practical demonstrations of real-world projects, allowing students to visualize the application of their learning."]
      },
      {
        title: "Q&A and Networking",
        points: ["Open forums where students engaged directly with industry experts, clearing doubts and gaining insights into their professional journey."]
      },
    ],
    keyTakeaways: [
      {
        title: "Practical Knowledge",
        description: "A deeper understanding of tools and techniques essential for today’s IT and engineering roles.",
      },
      {
        title: "Career Clarity",
        description: "Awareness of how internships can pave the way for full-time job opportunities and career progression.",
      },
      {
        title: "Enhanced Employability Skills",
        description: "Improved resumes, interview readiness, and industry-aligned technical expertise.",
      },
      {
        title: "Professional Connections",
        description: "Valuable relationships with industry mentors, peers, and recruiters for long-term career growth.",
      },
      {
        title: "Career Path Awareness",
        description: "The 65 participants left inspired and ready to embark on their data science journey with confidence and determination.",
      },
    ],
    highlights: ["The enthusiastic involvement of 105 students and the active participation of industry professionals marked the program as a significant step toward fostering career readiness and innovation among budding engineers."],
    heroImageUrl: "/events/internship-program-dj-sanghvi-college/Internship-Program-DJ-Sanghvi-College.png",
    success: "Get industry-ready with Cinute Digital Pvt. Ltd.! Enroll in our certification programs to master tools like Selenium, Postman, and more. Participate in our workshops and webinars to stay updated with the latest industry trends and technologies. Visit Cinute Digital Pvt. Ltd. to learn more about our initiatives and how we can help you succeed. Your future starts here—prepare to lead the IT and engineering world with confidence!",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "SVKM's Dwarkadas J. Sanghvi College of Engineering – Cinute Digital Pvt. Ltd",
    venueAddress: "Vile Parle, Mumbai",
    venueDescription: "SVKM’s Dwarkadas J. Sanghvi College of Engineering (DJSCE) in Vile Parle, Mumbai, is a leading institution offering undergraduate and postgraduate engineering programs. Established in 1994 and affiliated with the University of Mumbai, the college is known for its excellent infrastructure, experienced faculty, and strong focus on research. DJSCE has been granted autonomy and maintains a top-tier placement record with collaborations from leading companies. With a focus on holistic development, the college prepares students for successful careers in the engineering field.",
    venueImageUrl: "/events/internship-program-dj-sanghvi-college/DJ-Sanghvi-logo.png"
  },
  {
    id: "job-fair",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "job-fair",
    title: "Job Fair – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2023-03-18",
    location: "Nirmala Memorial Foundation College of Commerce and Science (NMFC) - Kandivali (East), Mumbai",
    attendees: 45,
    category: "Placement Drive",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Placement",
    purpose: "The Job Fair at Nirmala College was a remarkable initiative to connect B.Sc. students with potential employers, bridging the gap between academia and industry. With 150 participants, the event aimed to provide a platform for graduates to explore exciting career opportunities, understand industry requirements, and secure their first step toward a successful professional journey.",
    trainingDuration: "The job fair was meticulously organized to provide students with valuable insights, direct interactions with employers, and hands-on learning opportunities",
    sessionHighlights: [
      {
        title: "Inaugural Session",
        points: ["A warm welcome by the organizers, emphasizing the significance of job fairs in enhancing career prospects and connecting graduates with industry needs."]
      },
      {
        title: "Industry Stalls",
        points: ["Leading companies from sectors like IT, biotechnology, finance, and healthcare set up recruitment booths, offering information about job openings, required skills, and career paths."]
      },
      {
        title: "Resume Building Workshop",
        points: ["A dedicated session on crafting a professional resume that stands out, with practical tips from industry experts."]
      },
      {
        title: "Mock Interviews",
        points: ["On-the-spot interview practice sessions, giving students a taste of real-world recruitment processes and improving their confidence."]
      },
      {
        title: "Career Guidance Talks",
        points: ["Engaging talks by recruiters and professionals on emerging trends, industry expectations, and how to stay ahead in a competitive job market."]
      },
      {
        title: "Networking Opportunities",
        points: ["One-on-one interactions with employers, enabling students to make meaningful connections and leave lasting impressions."]
      },
    ],
    keyTakeaways: [
      {
        title: "Clarity on Career Opportunities",
        description: "A comprehensive understanding of roles available for B.Sc. graduates across various industries.",
      },
      {
        title: "Enhanced Employability Skills",
        description: "Improved resumes, interview techniques, and professional presentation skills.",
      },
      {
        title: "Networking Benefits",
        description: "Connections with recruiters and industry leaders, opening doors to internships and job offers.",
      },
      {
        title: "Confidence and Motivation",
        description: "Renewed enthusiasm to pursue their career goals with actionable insights from the event.",
      },
      {
        title: "Career Path Awareness",
        description: "The 65 participants left inspired and ready to embark on their data science journey with confidence and determination.",
      },
    ],
    highlights: ["The overwhelming participation of 150 students and the active involvement of recruiters highlighted the event's success, setting a benchmark for future job fairs."],
    heroImageUrl: "/events/job-fair/Job-Fair-nirmala-college.png",
    success: "Empower your career with Cinute Digital Pvt. Ltd.! Explore our certification programs designed to prepare you for industry demands in software testing, data analytics, and more. Join our workshops and webinars to gain insights into emerging trends and in-demand skills. Visit Cinute Digital Pvt. Ltd. to discover how we help graduates transform their aspirations into reality. Take charge of your career today—success starts with the right opportunities!",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Nirmala Memorial Foundation College of Commerce and Science - Cinute Digital Pvt. Ltd",
    venueAddress: "Kandivali (East), Mumbai",
    venueDescription: "Nirmala Memorial Foundation College of Commerce and Science (NMFC), located in Kandivali (East), Mumbai, is affiliated with the University of Mumbai. Established in 2003, it offers undergraduate programs in commerce, management, IT, and mass communication, fostering quality education and holistic development.",
    venueImageUrl: "/events/job-fair/nirmala-college-logo.png"
  },
  {
    id: "techoutsav",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "techoutsav",
    title: "Techoutsav",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2023-01-30",
    location: "Nirmala Memorial Foundation College of Commerce and Science (NMFC) - Kandivali (East), Mumbai",
    attendees: 48,
    category: "Placement Drive",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Placement",
    purpose: "TechoUtsav, the highly anticipated technical fest of Nirmala College, brought together a diverse group of students and tech enthusiasts to celebrate the spirit of innovation and technology. The event aimed to ignite curiosity, foster creativity, and provide participants with opportunities to explore the latest trends in technology. With 717 participants, the fest served as a platform for knowledge sharing, hands-on learning, and showcasing talent in the evolving tech landscape.",
    trainingDuration: "TechoUtsav was packed with engaging activities, expert sessions, and interactive experiences tailored to fuel the technological aspirations of students",
    sessionHighlights: [
      {
        title: "Keynote Sessions by Industry Experts",
        points: ["Renowned speakers shared insights on emerging technologies, such as AI and Machine Learning, Blockchain, IoT, and Cybersecurity."]
      },
      {
        title: "Workshops and Hands-On Training",
        points: ["Participants engaged in practical sessions, including app development, software testing basics, and data analysis with Python, gaining valuable skills for real-world applications."]
      },
      {
        title: "Hackathon Challenge",
        points: ["A high-energy coding competition where teams worked collaboratively to develop innovative solutions to real-world problems within a limited timeframe."]
      },
      {
        title: "Tech Exhibitions",
        points: ["Displays of groundbreaking projects, prototypes, and innovations by students, providing inspiration and a platform for knowledge exchange."]
      },
      {
        title: "Panel Discussion",
        points: ["Industry leaders and educators discussed career prospects in the IT sector, offering insights on the skills and mindset required to excel in the fast-paced tech industry."]
      },
      {
        title: "Interactive Q&A and Networking",
        points: ["An opportunity for students to interact with experts, clarify doubts, and network with peers and professionals."]
      },
      {
        title: "Cultural and Entertainment Programs",
        points: ["A perfect blend of technology and entertainment, showcasing talent through cultural performances and fun-filled activities."]
      },
    ],
    keyTakeaways: [
      {
        title: "IT trends",
        description: "A solid understanding of IT trends and how to adapt to the rapidly changing technological environment.",
      },
      {
        title: "Hands-on experience",
        description: "Hands-on experience in emerging tech areas, boosting confidence in applying their skills.",
      },
      {
        title: "Inspiration to innovate",
        description: "Inspiration to innovate and a roadmap to pursue successful careers in the IT industry.",
      },
      {
        title: "Connections",
        description: "Connections with like-minded peers and industry experts, fostering a community of tech enthusiasts.",
      },
    ],
    highlights: ["The event’s success was evident from the enthusiastic participation and positive feedback from the 717 attendees, making it a milestone in Nirmala College’s journey to promote technical excellence."],
    heroImageUrl: "/events/techoutsav/webinar-2-Nirmala-college.png",
    success: "Ready to embrace the future of technology? Stay ahead by attending workshops, webinars, and tech events organized by Cinute Digital Pvt. Ltd. Gain industry-ready skills through our certification programs in software testing, automation, and more. Visit Cinute Digital Pvt. Ltd. to explore opportunities to shape your career in the IT sector. Be part of a revolution that’s driving innovation and shaping the future—start your journey today!",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Nirmala Memorial Foundation College of Commerce and Science - Cinute Digital Pvt. Ltd",
    venueAddress: "Kandivali (East), Mumbai",
    venueDescription: "Nirmala Memorial Foundation College of Commerce and Science (NMFC), located in Kandivali (East), Mumbai, is affiliated with the University of Mumbai. Established in 2003, it offers undergraduate programs in commerce, management, IT, and mass communication, fostering quality education and holistic development.",
    venueImageUrl: "/events/techoutsav/nirmala-college-logo.png"
  },
  {
    id: "career-guidance-session-sn-college",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "career-guidance-session-addressing-post-graduates-to-secure-opportunities-in-it",
    title: "Career Guidance Session – Addressing Postgraduates to Secure Opportunities in IT – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2022-09-10",
    location: "Shankar Narayan College of Arts and Commerce - Bhayandar (East), Mumbai",
    attendees: 32,
    category: "Career Guidance",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Seminar",
    purpose: "The leap from postgraduate education to a thriving career in IT can be challenging without the right guidance and resources. Cinute Digital Pvt. Ltd. conducted a Career Guidance Session at S N College, Bhayander East, to equip postgraduates with actionable insights and strategies to secure rewarding opportunities in the ever-evolving IT industry. This session aimed to demystify the transition from academia to industry by providing personalized career advice and introducing participants to the skills most in demand today.",
    trainingDuration: "The session was tailored to address the unique needs of postgraduate students, offering a mix of insights, strategies, and practical takeaways",
    sessionHighlights: [
      {
        title: "Industry Overview & Trends",
        points: ["Exploration of emerging IT domains, such as AI, data analytics, cloud computing, and software testing."]
      },
      {
        title: "In-Demand Skills & Certifications",
        points: ["Guidance on technical proficiencies like automation testing, Python programming, and certifications like ISTQB and AWS to enhance employability."]
      },
      {
        title: "Resume & Interview Preparation",
        points: ["Strategies to craft standout resumes and ace interviews with confidence."]
      },
      {
        title: "Opportunities for Postgraduates",
        points: ["Insights into entry-level roles, internships, and how to navigate hiring processes for fresh talent."]
      },
      {
        title: "Real-World Case Studies",
        points: ["Success stories of IT professionals who transitioned smoothly from postgraduate programs to thriving careers."]
      },
      {
        title: "Interactive Panel Discussion",
        points: ["Experts shared practical advice and answered career-related queries during an engaging Q&A session."]
      },
    ],
    keyTakeaways: [
      {
        title: "IT trends",
        description: "A clear understanding of current IT industry demands and how to align their skills with these opportunities.",
      },
      {
        title: "Roadmap",
        description: "A roadmap to secure entry-level roles in high-demand fields like automation testing, cybersecurity, and IoT development.",
      },
      {
        title: "Confidence to excel",
        description: "Confidence to excel in interviews, along with tips to craft impactful resumes and LinkedIn profiles.",
      },
      {
        title: "Inspiration to invest",
        description: "Inspiration to invest in skill-building through certifications and practical training programs.",
      },
      {
        title: "Session",
        description: "The session was lauded by all 86 participants, who left with actionable plans to confidently pursue IT careers and contribute meaningfully to the industry.",
      },
    ],
    highlights: ["This dynamic and interactive session resonated with participants, helping them align their academic achievements with real-world IT opportunities."],
    heroImageUrl: "/events/career-guidance-session-sn-college/webinar-1-sn-college.png",
    success: "Ready to jumpstart your career in IT? Join our certification programs in software testing, automation, and other cutting-edge technologies. Attend our webinars and workshops to learn from industry experts and gain hands-on experience. Explore exclusive training opportunities designed for postgraduate students on our website at Cinute Digital Pvt. Ltd. Start building your future today! Visit Cinute Digital Pvt. Ltd. for more details and updates on upcoming sessions.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "S N College - Cinute Digital Pvt. Ltd",
    venueAddress: "Bhayandar (East), Mumbai",
    venueDescription: "Shankar Narayan College of Arts and Commerce, established in 1994, is located in Bhayandar East, Thane, Maharashtra. Affiliated with the University of Mumbai, it offers undergraduate and postgraduate programs in Arts, Commerce, and Science. The college is accredited with an ‘A’ grade by NAAC, reflecting its commitment to quality education. It has modern infrastructure, including labs, a library, and facilities for extracurricular activities. The college also boasts a strong placement cell, helping students secure jobs with top companies. Conveniently located, it is easily accessible by road and rail.",
    venueImageUrl: "/events/career-guidance-session-sn-college/SN-College-logo.png"
  },
  {
    id: "online-career-guidance-session",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "online-career-guidance-session",
    title: "Online Career Guidance Session – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2022-08-20",
    location: "Online event",
    attendees: 46,
    category: "Seminar",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "",
    purpose: "Navigating career choices in today’s fast-paced world can be daunting, especially with the evolving demands of the IT industry. To address this, Cinute Digital Pvt. Ltd. organized an Online Career Guidance Session to help participants explore their career options, identify strengths, and chart a successful professional roadmap. This webinar aimed to provide clarity, actionable advice, and valuable resources for career planning, empowering individuals to take confident steps toward achieving their goals.",
    trainingDuration: "The session was carefully curated to offer participants a comprehensive career-planning experience, focusing on",
    sessionHighlights: [
      {
        title: "Understanding Industry Trends",
        points: ["Insights into emerging fields such as AI and Machine Learning, software testing, cloud computing, and cybersecurity."]
      },
      {
        title: "Skill Development Strategies",
        points: ["Tips on acquiring in-demand skills like automation testing, programming, and data analytics to enhance employability."]
      },
      {
        title: "Crafting a Career Roadmap",
        points: ["Step-by-step guidance on defining goals, identifying key milestones, and building a strong professional portfolio."]
      },
      {
        title: "Interview Readiness",
        points: ["Practical advice on creating impactful resumes, acing interviews, and navigating corporate expectations."]
      },
      {
        title: "Live Q&A with Industry Experts",
        points: ["An engaging interaction where participants could address their career concerns and receive tailored advice."]
      },
    ],
    keyTakeaways: [
      {
        title: "Understanding of industry trends",
        description: "A deeper understanding of industry trends and their relevance to different career paths.",
      },
      {
        title: "Personalized action plan",
        description: "A personalized action plan to acquire skills aligned with industry demands.",
      },
      {
        title: "Professional certifications",
        description: "Knowledge about professional certifications like ISTQB and practical tools like Selenium to boost career prospects.",
      },
      {
        title: "Confidence to approach",
        description: "Confidence to approach job markets with a well-prepared resume, strong skills, and clarity of purpose.",
      },
      {
        title: "Overwhelming participation",
        description: "The overwhelming participation of 120 attendees underscored the relevance and success of the session, making it a stepping stone for their career aspirations.",
      },
      {
        title: "Online Career Guidance Session",
        description: "Shaping Your Path to Success",
      },
      {
        title: "Venue",
        description: "Online Webinar hosted on the Cinute Digital Pvt. Ltd. (CDPL) website",
      },
      {
        title: "Participants",
        description: "120 aspiring professionals from diverse backgrounds",
      },
    ],
    highlights: ["Interactive sessions, case studies, and real-world examples kept the audience motivated and engaged throughout the webinar."],
    heroImageUrl: "/events/online-career-guidance-session/webinar-cdpl.png",
    success: "Looking for more career guidance and skill-building opportunities? Explore our certification programs in software testing, QA, and other IT domains. Join our expert-led webinars and workshops to stay ahead in the competitive job market. Visit the CDPL website to discover upcoming sessions and exclusive training programs. Start your career journey today! Sign up for our webinars and training programs at Cinute Digital Pvt. Ltd.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Online Webinar",
    venueAddress: "",
    venueDescription: "",
    venueImageUrl: ""
  },
  {
    id: "unlocking-it-trends-and-opportunities-a-one-day-strategy-session",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "unlocking-it-trends-and-opportunities-a-one-day-strategy-session",
    title: "Unlocking IT Trends and Opportunities: A One-Day Strategy Session – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2023-08-22",
    location: "Universal MSG-SGKM College of Arts, Science & Commerce - Naigaon East",
    attendees: 32,
    category: "Career Guidance",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Seminar",
    purpose: "This One-Day Strategy Session aimed to enlighten participants about the ever-evolving IT landscape and equip them with actionable strategies to navigate and excel in the industry. The session focused on identifying key trends, exploring career opportunities, and understanding the skills required to thrive in today’s competitive IT sector. Through an engaging and interactive agenda, the program empowered 65 participants to envision a future aligned with industry demands and emerging technologies.",
    trainingDuration: "The strategy session featured dynamic discussions, expert insights, and hands-on learning experiences",
    sessionHighlights: [
      {
        title: "Welcome Note",
        points: ["The event kicked off with an inspiring introduction emphasising the critical role of IT in shaping industries and individual careers."]
      },
      {
        title: "Keynote Address",
        points: ["An industry leader delivered an insightful keynote on emerging IT trends such as AI, cloud computing, blockchain, and IoT."]
      },
      {
        title: "Exploring Career Pathways",
        points: ["A deep dive into lucrative roles in IT, including data science, cybersecurity, software testing, and full-stack development, with real-life examples of success stories."]
      },
      {
        title: "Skill Mapping Workshop",
        points: ["Interactive activities to help participants identify their strengths and align them with industry needs, focusing on in-demand technical and soft skills."]
      },
      {
        title: "Industry Case Studies",
        points: ["A showcase of practical applications and innovative IT projects that have revolutionised various sectors."]
      },
      {
        title: "Q&A and Networking",
        points: ["Participants engaged directly with experts, clarifying doubts, and building meaningful connections for future growth."]
      }
    ],
    keyTakeaways: [
      {
        title: "Knowledge of IT Trends",
        description: "A comprehensive understanding of how technology advancements are shaping industries and creating new opportunities.",
      },
      {
        title: "Career Insights",
        description: "Clarity on career options, industry expectations, and pathways to build a successful IT career.",
      },
      {
        title: "Actionable Strategies",
        description: "A personalised roadmap to align their skills with emerging trends and stand out in the competitive job market.",
      },
      {
        title: "Networking Benefits",
        description: "Stronger connections with industry professionals and peers, laying the foundation for collaboration and mentorship.",
      },
      {
        title: "Overwhelming participation",
        description: "The overwhelming participation of 120 attendees underscored the relevance and success of the session, making it a stepping stone for their career aspirations.",
      },
      {
        title: "Online Career Guidance Session",
        description: "Shaping Your Path to Success",
      },
      {
        title: "Venue",
        description: "Online Webinar hosted on the Cinute Digital Pvt. Ltd. (CDPL) website",
      },
      {
        title: "Participants",
        description: "120 aspiring professionals from diverse backgrounds",
      },
    ],
    highlights: ["The active participation of 65 students and the dynamic agenda ensured the session’s success, leaving attendees motivated and prepared to capitalise on IT opportunities."],
    heroImageUrl: "/events/unlocking-it-trends-and-opportunities-a-one-day-strategy-session/Universal-college-webinar.jpg",
    success: "Empower Your IT Career with Cinute Digital Pvt. Ltd.! Join our certification programs to master in-demand IT skills like data analytics, automation testing, and more. Participate in webinars, workshops, and training programs tailored to emerging industry trends. Visit Cinute Digital Pvt. Ltd. to explore how we help individuals and institutions unlock their potential in the ever-evolving IT world. Stay ahead of the curve—your IT career starts here!",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Universal MSG-SGKM College of Arts, Science & Commerce – Cinute Digital Pvt. Ltd",
    venueAddress: "Naigaon East",
    venueDescription: "Universal College of Engineering is approved by the All India Council for Technical Education (AICTE), New Delhi; recognized by the Directorate of Technical Education (DTE), Government of Maharashtra; affiliated to Mumbai University. The college is also associated with professional bodies like IEEE, IETE, ISA and CSI to update the revolutionary technological advancements. It offers 4 years full-time Bachelor of Technology in Computer Engineering, Civil Engineering, Information Technology Engineering, Data Science, and Artificial Intelligence & Machine Learning.",
    venueImageUrl: "/events/unlocking-it-trends-and-opportunities-a-one-day-strategy-session/Universal-college-logo.jpg"
  },
  {
    id: "corporate-institute-meet-andhra-loyola",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "corporate-institute-meet-andhra-loyola-institute-of-engineering-and-technology-aliet-nirmala-memorial-foundation-college-of-commerce-science",
    title: "Corporate & Institute Meet – Andhra Loyola Institute of Engineering and Technology (ALIET) & Nirmala Memorial Foundation College of Commerce & Science – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2023-04-29",
    location: "MiraRoad East",
    attendees: 27,
    category: "Corporate Workshop",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "",
    purpose: "The Corporate & Institute Meet brought together representatives from Andhra Loyola Institute of Engineering and Technology (ALIET) and Nirmala Memorial Foundation College of Commerce & Science to foster collaboration between academia and the corporate world. The event aimed to explore avenues for mutual growth, enhance student employability, and discuss strategies to align academic curricula with industry standards. By creating a platform for dialogue and exchange, the meet set the stage for meaningful partnerships that empower students and strengthen institutional networks.",
    trainingDuration: "The meet featured engaging discussions, presentations, and activities to achieve its objectives",
    sessionHighlights: [
      {
        title: "Welcome & Inauguration",
        points: ["A warm welcome by Nirmala College, emphasizing the importance of collaboration between academia and industry in today’s dynamic job market."]
      },
      {
        title: "Panel Discussion",
        points: ["An insightful dialogue on current IT industry trends, skill gaps, and strategies to bridge them through tailored educational initiatives."]
      },
      {
        title: "Presentation on Internship Programs",
        points: ["Detailed insights into internship opportunities provided by industry leaders, focusing on hands-on learning and real-world applications."]
      },
      {
        title: "Institutional Collaboration Opportunities",
        points: ["Brainstorming sessions to explore joint initiatives like guest lectures, corporate training programs, and industry-academia projects."]
      },
      {
        title: "Industry Case Studies",
        points: ["A showcase of successful collaborations between institutes and corporates, highlighting the transformative impact on student careers."]
      },
      {
        title: "Q&A and Networking",
        points: ["Participants engaged in open discussions, sharing experiences, insights, and plans for future collaborations."]
      }
    ],
    keyTakeaways: [
      {
        title: "Strategic Insights",
        description: "A clearer understanding of how academic institutions can align their programs with industry needs.",
      },
      {
        title: "Collaborative Plans",
        description: "A roadmap for launching joint initiatives, internships, and specialized training programs.",
      },
      {
        title: "Enhanced Networks",
        description: "Stronger connections between faculty, corporate representatives, and other academic institutions."
      },
      {
        title: "Student-Centric Focus",
        description: "Actionable strategies to empower students with the skills and experiences required to excel in their careers.",
      },
    ],
    highlights: ["The event successfully brought together 40 participants, fostering relationships that promise to benefit students, educators, and the corporate world alike."],
    heroImageUrl: "/events/corporate-institute-meet-andhra-loyola-institute-of-engineering-and-technology-aliet-nirmala-memorial-foundation-college-of-commerce-science/cdpl-andhra-loyla.jpg",
    success: "Transform education with Cinute Digital Pvt. Ltd.! Partner with us to deliver cutting-edge training programs, industry-relevant certifications, and career guidance seminars for your students. Explore our corporate and institutional collaboration opportunities to build a workforce ready for the future. Visit Cinute Digital Pvt. Ltd. to learn more about how we empower institutions and students alike. Together, let’s shape the future of education and careers—start your journey with us today!",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Cinute Digital Pvt. Ltd",
    venueAddress: "",
    venueDescription: "",
    venueImageUrl: ""
  },
  {
    id: "one-day-program-mastering-automation",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "one-day-program-mastering-automation-testing-and-crafting-your-path-to-proficiency",
    title: "One-Day Program: Mastering Automation Testing and Crafting Your Path to Proficiency – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2023-02-16",
    location: "MiraRoad East",
    attendees: 39,
    category: "Workshop",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Automation Testing",
    purpose: "The One-Day Program on Mastering Automation Testing was designed to equip participants with the knowledge and practical skills needed to excel in the rapidly growing field of automation testing. With 25 participants from Royal College, this focused program provided an in-depth understanding of automation tools, industry practices, and career opportunities in the QA domain. The session aimed to bridge the gap between theoretical knowledge and real-world application, enabling attendees to craft a strong path toward proficiency in software testing.",
    trainingDuration: "The program was meticulously structured to deliver both conceptual clarity and hands-on experience",
    sessionHighlights: [
      {
        title: "Introduction to Automation Testing",
        points: ["An engaging session on the significance of automation testing, its role in modern software development, and its advantages over manual testing."]
      },
      {
        title: "Panel Discussion",
        points: ["An insightful dialogue on current IT industry trends, skill gaps, and strategies to bridge them through tailored educational initiatives."]
      },
      {
        title: "Hands-on with Selenium WebDriver",
        points: ["A practical demonstration of Selenium WebDriver, showcasing its capabilities for automating web application testing."]
      },
      {
        title: "Framework Implementation",
        points: ["Insights into building and implementing test automation frameworks to enhance efficiency and scalability in QA processes."]
      },
      {
        title: "Exploring Real-World Scenarios",
        points: ["Case studies on automation in industries such as e-commerce, banking, and healthcare, demonstrating how quality assurance impacts business success."]
      },
      {
        title: "Career Roadmap in Automation Testing",
        points: ["Detailed guidance on the skills, certifications, and tools essential for a successful career in automation testing."]
      },
      {
        title: "Interactive Q&A Session",
        points: ["Participants engaged with industry experts to clarify doubts, discuss challenges, and understand the latest trends in automation testing."]
      }
    ],
    keyTakeaways: [
      {
        title: "Strong Foundation",
        description: "A strong foundation in automation testing concepts and their practical applications.",
      },
      {
        title: "Hands-on experience",
        description: "Hands-on experience with industry-standard tools like Selenium WebDriver, preparing them for real-world projects.",
      },
      {
        title: "Roadmap",
        description: "A roadmap to pursue a successful career in automation testing, including guidance on certifications and skill-building."
      },
      {
        title: "Inspiration to innovate",
        description: "Inspiration to innovate and apply testing techniques to ensure high-quality software development.",
      },
    ],
    highlights: ["The session's success was reflected in the enthusiastic participation and positive feedback from the 25 attendees, who left the event equipped with actionable skills and knowledge."],
    heroImageUrl: "/events/one-day-program-mastering-automation-testing-and-crafting-your-path-to-proficiency/Royal-college-program.jpg",
    success: "Unlock your potential in automation testing with Cinute Digital Pvt. Ltd.! Enroll in our certification courses to gain expertise in software testing and automation tools. Stay updated with our workshops, webinars, and career guidance programs to stay ahead in the IT industry. Visit Cinute Digital Pvt. Ltd. to explore training programs that bridge the gap between academics and industry demands. Take the first step toward mastering automation testing—your career in IT starts here!",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Royal College",
    venueAddress: "Mira Road, Mumbai",
    venueDescription: "Royal College of Arts, Science, and Commerce, located in Mira Road, Mumbai, is a prestigious institution dedicated to academic excellence and holistic development. Offering a wide range of undergraduate and postgraduate programs, the college emphasizes quality education, ethical values, and skill development. With modern facilities, experienced faculty, and a student-centric approach, Royal College nurtures individuals to excel in their chosen fields and contribute positively to society.",
    venueImageUrl: "/events/one-day-program-mastering-automation-testing-and-crafting-your-path-to-proficiency/Royal-college-logo.png"
  },
  {
    id: "industrial-visit-viva-institute-of-technology",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "industrial-visit-viva-institute-of-technology",
    title: "Industrial Visit by VIVA Institute of Technology (2023) – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2023-02-04",
    location: "MiraRoad East",
    attendees: 36,
    category: "Corporate Workshop",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Software Testing",
    purpose: "Industrial visits bridge the gap between theoretical knowledge and practical experience. Cinute Digital Pvt. Ltd. and Testriq QA Lab, LLP hosted an industrial visit for 52 students from VIVA Institute of Technology, aiming to provide a real-world understanding of software testing, quality assurance, and their significance in the IT industry. This visit was designed to inspire innovation, enhance career readiness, and empower students with insights into the ever-evolving IT landscape.",
    trainingDuration: "The visit featured a blend of knowledge-sharing and interactive experiences, offering students an immersive learning opportunity",
    sessionHighlights: [
      {
        title: "Welcome Session",
        points: ["A cordial introduction to the mission and vision of Cinute Digital Pvt. Ltd. and Testriq QA Lab, LLP, highlighting our expertise in software testing and QA solutions."]
      },
      {
        title: "Understanding QA Practices",
        points: ["A detailed overview of software testing methodologies, including manual testing, automation testing, and API testing."]
      },
      {
        title: "Live Demonstrations",
        points: ["Hands-on sessions with industry tools like Selenium WebDriver, JIRA, Postman, and other cutting-edge platforms used in real-world QA workflows."]
      },
      {
        title: "Career Guidance in IT",
        points: ["Insights into various roles in software testing, career growth opportunities, and skills required for positions such as QA engineers and automation testers."]
      },
      {
        title: "Behind-the-Scenes Office Tour",
        points: ["A guided walk through the CDPL and Testriq QA Lab offices, showcasing the tools, technologies, and collaborative work culture that drive excellence."]
      },
      {
        title: "Interactive Q&A",
        points: ["An engaging discussion where students addressed their career queries, gained clarity on industry expectations, and received valuable tips from experienced professionals."]
      },
    ],
    keyTakeaways: [
      {
        title: "Practical understanding",
        description: "A practical understanding of how quality assurance ensures the success of IT projects.",
      },
      {
        title: "Tools and methodologies",
        description: "Exposure to testing tools and methodologies directly relevant to industry practices.",
      },
      {
        title: "Career opportunities",
        description: "A deeper appreciation for career opportunities in the QA and software testing domains, along with tips for skill development."
      },
      {
        title: "Confidence to pursue",
        description: "Confidence to pursue a successful career in IT, backed by actionable insights from experts.",
      },
    ],
    highlights: ["The visit was a resounding success, with all 52 participants leaving inspired and equipped with knowledge to shape their future in the IT sector."],
    heroImageUrl: "/events/industrial-visit-viva-institute-of-technology/viva-program.jpg",
    success: "Empower your career in IT with Cinute Digital Pvt. Ltd.! Enroll in our certification courses for in-depth learning in software testing and automation tools. Join our industry workshops and career-oriented webinars to stay ahead in the tech world. Discover how you can bridge the gap between academics and industry by visiting Cinute Digital Pvt. Ltd. Step into the world of IT with confidence. Let’s build your future together!",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "TESTRIQ QA LAB LLP",
    venueAddress: "Mira Road, Mumbai",
    venueDescription: "Testriq QA Lab LLP is a leading software testing and quality assurance company based in Mumbai, India. With over a decade of experience, Testriq offers a comprehensive suite of services, including LaunchFast QA, exploratory testing, web and mobile application testing, API testing, IoT device testing, AI application testing, robotics testing, smart device testing, ETL testing, data analysis, security testing, manual testing, regression testing, performance testing, QA documentation, and automation testing. Their team of ISTQB-certified experts collaborates with clients ranging from startups to established industry leaders, ensuring the delivery of high-quality, reliable software products. Testriq’s commitment to excellence is evident in their state-of-the-art testing infrastructure and up-to-date environments, which adhere to international standards. By focusing on minimizing risks and maximizing quality, Testriq has played a pivotal role in the success of numerous award-winning applications across diverse industries.",
    venueImageUrl: "/events/industrial-visit-viva-institute-of-technology/Testriq-event.png"
  },
  {
    id: "industrial-visit-thakur-college-of-science-commerce",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "industrial-visit-thakur-college-of-science-commerce",
    title: "Industrial Visit – Thakur College of Science & Commerce – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2023-01-20",
    location: "MiraRoad East",
    attendees: 37,
    category: "Corporate Workshop",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Software Testing",
    purpose: "Industrial visits offer students a unique opportunity to connect classroom theories with industry practices. Cinute Digital Pvt. Ltd. and Testriq QA Lab, LLP hosted an industrial visit for 40 students from Thakur College of Science & Commerce to provide them with a firsthand understanding of the IT sector, specifically focusing on software testing and quality assurance processes. This visit aimed to ignite curiosity, encourage innovation, and help students explore career opportunities in the thriving IT industry.",
    trainingDuration: "The visit was structured to combine education and engagement, allowing students to gain a holistic view of the IT and QA industries",
    sessionHighlights: [
      {
        title: "Welcome & Introduction",
        points: ["A warm welcome followed by an engaging session on the journey, achievements, and core services of Cinute Digital Pvt. Ltd. and Testriq QA Lab, LLP."]
      },
      {
        title: "Introduction to Software Testing",
        points: ["An overview of the importance of quality assurance, explaining how testing ensures the reliability, performance, and security of applications."]
      },
      {
        title: "Hands-on Demonstration of QA Tools",
        points: ["Live demos of industry-standard tools like Selenium WebDriver, JIRA, Postman, and GitHub Copilot, showcasing real-world testing processes."]
      },
      {
        title: "Exploring Career Paths",
        points: ["Insights into career opportunities in manual testing, automation testing, and emerging fields such as AI-driven QA."]
      },
      {
        title: "Real-Time Project Workflow",
        points: ["A walkthrough of our project lifecycle, including requirement gathering, test case creation, execution, and defect management."]
      },
      {
        title: "Interactive Q&A Session",
        points: ["Students actively engaged with our experienced professionals, discussing industry trends, skill requirements, and tips for entering the IT industry."]
      },
      {
        title: "Office Tour",
        points: ["A guided exploration of our workplace, offering students a glimpse into the professional environment and cutting-edge technologies in action."]
      }
    ],
    keyTakeaways: [
      {
        title: "",
        description: "A comprehensive understanding of how quality assurance plays a pivotal role in software development.",
      },
      {
        title: "",
        description: "Exposure to real-world testing tools and methodologies, along with insights into practical workflows.",
      },
      {
        title: "",
        description: "Clarity on career paths in the IT and QA domains, including the qualifications and skills required to succeed."
      },
      {
        title: "",
        description: "Inspiration and actionable guidance to bridge the gap between academic learning and industry readiness.",
      },
    ],
    highlights: ["The students left motivated and equipped with the knowledge to pursue careers in the fast-growing IT sector. The event’s success was evident in the feedback and engagement of all 40 participants."],
    heroImageUrl: "/events/industrial-visit-thakur-college-of-science-commerce/thakur-college-program.jpg",
    success: "Discover the world of IT and software testing with Cinute Digital Pvt. Ltd.! Explore our training programs in software testing, automation, and industry-standard certifications. Join our interactive workshops and career-focused webinars to gain hands-on expertise. Stay updated on our upcoming events and career guidance sessions by visiting Cinute Digital Pvt. Ltd. Take the first step towards an exciting IT career today!",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "TESTRIQ QA LAB LLP",
    venueAddress: "Mira Road, Mumbai",
    venueDescription: "Testriq QA Lab LLP is a leading software testing and quality assurance company based in Mumbai, India. With over a decade of experience, Testriq offers a comprehensive suite of services, including LaunchFast QA, exploratory testing, web and mobile application testing, API testing, IoT device testing, AI application testing, robotics testing, smart device testing, ETL testing, data analysis, security testing, manual testing, regression testing, performance testing, QA documentation, and automation testing. Their team of ISTQB-certified experts collaborates with clients ranging from startups to established industry leaders, ensuring the delivery of high-quality, reliable software products. Testriq’s commitment to excellence is evident in their state-of-the-art testing infrastructure and up-to-date environments, which adhere to international standards. By focusing on minimizing risks and maximizing quality, Testriq has played a pivotal role in the success of numerous award-winning applications across diverse industries.",
    venueImageUrl: "/events/industrial-visit-viva-institute-of-technology/Testriq-event.png"
  },
  {
    id: "industrial-visit-sdsm-college-palghar",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "industrial-visit-sdsm-college-palghar",
    title: "Industrial Visit - SDSM College, Palghar – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2022-09-24",
    location: "MiraRoad East",
    attendees: 41,
    category: "Corporate Workshop",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Software Testing",
    purpose: "An industrial visit provides students with valuable exposure to real-world operations, bridging the gap between academic learning and industry practices. Cinute Digital Pvt. Ltd. and Testriq QA Lab, LLP were delighted to host 40 students from SDSM College, Palghar at our office in Miraroad East. The visit aimed to offer students firsthand insights into software testing and quality assurance processes, along with an overview of the daily operations and career opportunities in the tech and IT industries.",
    trainingDuration: "The visit was a blend of informative sessions and live demonstrations, offering a comprehensive look at our operations and services",
    sessionHighlights: [
      {
        title: "Introduction to CDPL and Testriq QA Lab, LLP",
        points: ["A warm welcome and an overview of both companies, their mission, and vision, highlighting their roles in the IT and software testing industry."]
      },
      {
        title: "Overview of Software Testing and Quality Assurance",
        points: ["Students were introduced to the importance of QA, the various types of testing, and the methodologies employed, such as manual testing, automation testing, and API testing."]
      },
      {
        title: "Live Demonstration of Testing Tools",
        points: ["Hands-on demonstrations of popular tools like Selenium WebDriver, JIRA, and Postman, showing how we conduct real-world tests and manage test cases."]
      },
      {
        title: "Career Opportunities in QA and Software Testing",
        points: ["Insights into various career paths within the software testing industry, including roles such as test engineers, test analysts, automation engineers, and QA leads."]
      },
      {
        title: "Interactive Q&A Session",
        points: ["Students interacted with experienced professionals, discussing career queries, industry expectations, and the skills required to excel in the tech field."]
      },
      {
        title: "Office Tour",
        points: ["A guided tour of the CDPL and Testriq QA Lab facilities, offering students a glimpse into the workplace environment and the latest technologies in use."]
      }
    ],
    keyTakeaways: [
      {
        title: "",
        description: "A real-world perspective on software testing and quality assurance practices in a corporate setting.",
      },
      {
        title: "",
        description: "Exposure to industry tools and technologies used in testing applications and ensuring software quality.",
      },
      {
        title: "",
        description: "A clearer understanding of career opportunities in the tech industry, particularly in QA and software testing roles."
      },
      {
        title: "",
        description: "A strong foundation in the practical aspects of manual and automation testing, boosting their confidence to pursue these areas professionally.",
      },
    ],
    highlights: ["The visit was a great success, with all 40 participants gaining valuable insights that will help them make informed career decisions and shape their future in the IT and testing sectors."],
    heroImageUrl: "/events/industrial-visit-sdsm-college-palghar/sdsm-IV.jpg",
    success: "Are you ready to explore a career in software testing and quality assurance? Join our certification programs in software testing and automation to enhance your skills. Attend our workshops and training sessions to gain hands-on experience with industry-standard tools. Keep up with the latest trends and opportunities in software testing by visiting Cinute Digital Pvt. Ltd. Don’t miss out on your chance to start a successful career in IT and testing!",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "TESTRIQ QA LAB LLP",
    venueAddress: "Mira Road, Mumbai",
    venueDescription: "Testriq QA Lab LLP is a leading software testing and quality assurance company based in Mumbai, India. With over a decade of experience, Testriq offers a comprehensive suite of services, including LaunchFast QA, exploratory testing, web and mobile application testing, API testing, IoT device testing, AI application testing, robotics testing, smart device testing, ETL testing, data analysis, security testing, manual testing, regression testing, performance testing, QA documentation, and automation testing. Their team of ISTQB-certified experts collaborates with clients ranging from startups to established industry leaders, ensuring the delivery of high-quality, reliable software products. Testriq’s commitment to excellence is evident in their state-of-the-art testing infrastructure and up-to-date environments, which adhere to international standards. By focusing on minimizing risks and maximizing quality, Testriq has played a pivotal role in the success of numerous award-winning applications across diverse industries.",
    venueImageUrl: "/events/industrial-visit-viva-institute-of-technology/Testriq-event.png"
  },
  {
    id: "engineering-day-guiding-the-next-generation",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "engineering-day-guiding-the-next-generation-of-engineers-with-insights-into-the-it-world",
    title: "Engineering Day: Guiding the Next Generation of Engineers with Insights into the IT World – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2022-09-15",
    location: "Malad West",
    attendees: 35,
    category: "Career Guidance",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Seminar",
    purpose: "Celebrating the spirit of innovation and technical excellence, Cinute Digital Pvt. Ltd. organized a special Engineering Day event at Atharva College of Engineering. This initiative aimed to inspire the next generation of engineers by providing a comprehensive understanding of the IT industry, emerging trends, and actionable career guidance. The session encouraged students to embrace innovation, build industry-relevant skills, and seize opportunities in the dynamic world of information technology.",
    trainingDuration: "The event was carefully structured to enlighten and empower participants through engaging discussions and activities, including",
    sessionHighlights: [
      {
        title: "Emerging IT Trends",
        points: ["Exploring how Artificial Intelligence (AI), Blockchain, Automation Testing, and IoT are reshaping the global IT landscape."]
      },
      {
        title: "Opportunities in Software Testing",
        points: ["A deep dive into manual and automation testing, including tools like Selenium WebDriver and the growing demand for QA engineers."]
      },
      {
        title: "Engineering and IT Synergy",
        points: ["Highlighting how engineering principles are foundational to innovations in IT, with real-world examples of cross-disciplinary applications."]
      },
      {
        title: "Skill Development for Engineers",
        points: ["Practical advice on mastering essential programming languages, adopting tools for automation, and pursuing certifications such as ISTQB and AWS Certified Developer."]
      },
      {
        title: "Interactive Activities",
        points: ["Live demonstrations of testing workflows, brainstorming sessions, and case studies to provide hands-on exposure to IT tools and methodologies."]
      },
      {
        title: "Panel Discussion with Experts",
        points: ["Industry professionals shared their experiences, success stories, and insights into career pathways in IT."]
      }
    ],
    keyTakeaways: [
      {
        title: "",
        description: "A clear understanding of IT trends and their relevance to future innovations.",
      },
      {
        title: "",
        description: "Insights into career opportunities in high-demand fields like software testing, cloud computing, and AI-driven development.",
      },
      {
        title: "",
        description: "An actionable plan for skill development, including recommendations for certifications and training programs."
      },
      {
        title: "",
        description: "Confidence and inspiration to contribute meaningfully to the ever-evolving IT industry as future-ready engineers.",
      },

    ],
    highlights: ["The event concluded with a vibrant Q&A session where participants engaged in meaningful conversations with the experts."],
    heroImageUrl: "/events/engineering-day-guiding-the-next-generation-of-engineers-with-insights-into-the-it-world/engineering-day-guide.jpg",
    success: "The event’s success was evident in the enthusiasm and feedback from all 127 participants, who gained valuable knowledge to help shape their careers in IT.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Atharva College of Engineering",
    venueAddress: "Mumbai",
    venueDescription: "Atharva College of Engineering, located in Mumbai, India, is a premier institution offering state-of-the-art facilities and a dynamic academic environment. Known for its emphasis on innovation and excellence, the college provides undergraduate engineering programs in various disciplines, fostering technical expertise and holistic development. It is dedicated to shaping future-ready professionals through a blend of quality education, industry exposure, and co-curricular activities.",
    venueImageUrl: "/events/engineering-day-guiding-the-next-generation-of-engineers-with-insights-into-the-it-world/atharva-logo.png"
  },
  {
    id: "one-day-seminar-on-it-industry-trends",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "one-day-seminar-on-it-industry-trends-and-capitalizing-on-new-opportunities",
    title: "One-Day Seminar on IT Industry Trends and Capitalizing on New Opportunities – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2022-09-14",
    location: "Virar East",
    attendees: 46,
    category: "Seminar",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "",
    purpose: "In today’s dynamic IT landscape, staying updated on emerging trends is essential for professionals and students alike. Cinute Digital Pvt. Ltd. hosted a One-Day Seminar at VIVA College of Engineering to provide an in-depth understanding of current IT industry trends and strategies to seize new opportunities. The seminar aimed to bridge the knowledge gap between academic learning and industry requirements, empowering participants to make informed career decisions and stay ahead in the competitive IT sector.",
    trainingDuration: "This immersive seminar covered a range of topics, offering a perfect blend of knowledge-sharing, skill-building, and actionable insights, including",
    sessionHighlights: [
      {
        title: "IT Industry Trends",
        points: ["Detailed discussions on cutting-edge technologies like Artificial Intelligence (AI), Machine Learning (ML), Blockchain, and Cybersecurity reshaping the IT industry."]
      },
      {
        title: "Opportunities in Software Testing",
        points: ["Insights into manual and automation testing, tools like Selenium WebDriver, and the rising demand for QA professionals."]
      },
      {
        title: "The Future of Cloud Computing and IoT",
        points: ["Exploring the integration of cloud services and IoT in transforming industries."]
      },
      {
        title: "Skill Development Roadmap",
        points: ["Identifying in-demand skills such as data analytics, programming languages, and key certifications like ISTQB and AWS Certified Solutions Architect."]
      },
      {
        title: "Live Interactive Panel Discussion",
        points: ["A Q&A session with industry experts addressing career-related queries and sharing success stories."]
      },
      {
        title: "Panel Discussion with Experts",
        points: ["Industry professionals shared their experiences, success stories, and insights into career pathways in IT."]
      }
    ],
    keyTakeaways: [
      {
        title: "",
        description: "A comprehensive understanding of the latest IT trends and their impact on various industries.",
      },
      {
        title: "",
        description: "Clear guidance on how to capitalize on emerging opportunities in fields like software testing, AI, and cloud computing.",
      },
      {
        title: "",
        description: "Actionable tips for career growth, including skill acquisition, certification paths, and networking strategies."
      },
      {
        title: "",
        description: "Confidence to align their academic knowledge with industry expectations, preparing for roles like software test engineer, data analyst, and cloud specialist.",
      },
      {
        title: "",
        description: "The overwhelming participation of 92 attendees reflected the success and relevance of this seminar in addressing the career aspirations of budding tech professionals.",
      }

    ],
    highlights: ["Real-world examples, case studies, and interactive activities kept participants engaged throughout the day."],
    heroImageUrl: "/events/one-day-seminar-on-it-industry-trends-and-capitalizing-on-new-opportunities/one-day-seminar-viva.jpg",
    success: "Shape your career with Cinute Digital Pvt. Ltd.! Explore our training programs in trending IT domains like software testing, automation, and cybersecurity. Join our hands-on workshops and certification courses to stay job-ready in a competitive market. Visit the Cinute Digital Pvt. Ltd. website for updates on upcoming seminars and training opportunities tailored to your needs. Don’t wait to secure your future. Start your journey with us today!",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "VIVA Institute of Technology",
    venueAddress: "Virar, Maharashtra",
    venueDescription: "VIVA Institute of Technology (VIT), established in 2009, is located in Virar, Maharashtra. Affiliated with the University of Mumbai, it offers undergraduate and postgraduate programs in engineering disciplines like Mechanical, Civil, and Computer Science. The institute provides modern infrastructure, well-equipped labs, and a strong focus on practical skills. VIT has a dedicated placement cell, ensuring students secure positions in top companies. Its accessible location makes it a popular choice for students in the Mumbai region.",
    venueImageUrl: "/events/one-day-seminar-on-it-industry-trends-and-capitalizing-on-new-opportunities/Viva-College-LOGO.png"
  },
  {
    id: "exploring-career-opportunities-as-a-software-test-engineer",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "exploring-career-opportunities-as-a-software-test-engineer-a-roadmap-for-success",
    title: "Exploring Career Opportunities as a Software Test Engineer: A Roadmap for Success – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2022-08-25",
    location: "Malad West",
    attendees: 32,
    category: "Career Guidance Seminar",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Software Testing",
    purpose: "With software quality assurance becoming an indispensable part of the IT industry, the demand for skilled software test engineers has skyrocketed. Cinute Digital Pvt. Ltd. conducted a transformative session, 'Exploring Career Opportunities as a Software Test Engineer: A Roadmap for Success,' at Atharva College of Engineering. The session aimed to guide students toward building a successful career in software testing by providing them with the tools, knowledge, and insights needed to thrive in this rewarding field.",
    trainingDuration: "The session was meticulously designed to give participants a 360-degree view of the software testing profession, covering",
    sessionHighlights: [
      {
        title: "Role of a Software Test Engineer",
        points: ["Responsibilities, skillsets, and the critical role testing plays in ensuring software quality."]
      },
      {
        title: "Manual vs. Automation Testing",
        points: ["Comparative analysis of manual testing techniques and the growing demand for automation tools like Selenium."]
      },
      {
        title: "Emerging Trends in Testing",
        points: ["Insights into AI-driven testing, IoT testing, and mobile app testing as future game-changers."]
      },
      {
        title: "Career Pathways & Certifications",
        points: ["Steps to kickstart a career, certifications like ISTQB, and opportunities for professional growth."]
      },
      {
        title: "Hands-on Demo",
        points: ["Live demonstration of test case creation and automation scripts, giving participants practical exposure to testing tools."]
      },
    ],
    keyTakeaways: [
      {
        title: "",
        description: "A comprehensive understanding of the software testing domain and its lucrative career potential.",
      },
      {
        title: "",
        description: "Awareness of essential tools and technologies, including Selenium WebDriver and JIRA.",
      },
      {
        title: "",
        description: "A clear roadmap for professional development, from certifications to advanced testing methodologies."
      },
      {
        title: "",
        description: "Inspiration to pursue excellence in a field that values precision, problem-solving, and innovation.",
      },

    ],
    highlights: ["The interactive Q&A session at the end allowed participants to clear doubts and gain personalized advice from industry experts."],
    heroImageUrl: "/events/exploring-career-opportunities-as-a-software-test-engineer-a-roadmap-for-success/exploring-career-opportunities-roadmap.jpg",
    success: "Explore our certification programs designed to make you job-ready. Join our career-oriented training sessions for real-world insights into testing tools like Selenium, JIRA, and Postman. Stay ahead of the curve with Cinute Digital Pvt. Ltd.'s cutting-edge courses in software testing and quality assurance.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Atharva College of Engineering",
    venueAddress: "Mumbai",
    venueDescription: "Atharva College of Engineering, located in Mumbai, India, is a premier institution offering state-of-the-art facilities and a dynamic academic environment. Known for its emphasis on innovation and excellence, the college provides undergraduate engineering programs in various disciplines, fostering technical expertise and holistic development. It is dedicated to shaping future-ready professionals through a blend of quality education, industry exposure, and co-curricular activities.",
    venueImageUrl: "/events/exploring-career-opportunities-as-a-software-test-engineer-a-roadmap-for-success/atharva-logo.png"
  },
  {
    id: "1-day-program-at-universal-college",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "1-day-program-at-universal-college-of-engineering-on-it-trends-and-opportunities",
    title: "1-Day Program at Universal College of Engineering on IT Trends and Opportunities – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2022-08-01",
    location: "Naigaon East",
    attendees: 32,
    category: "Career Guidance Seminar",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "",
    purpose: "The IT industry evolves at lightning speed, making it crucial for students to stay updated on emerging trends and opportunities. Cinute Digital Pvt. Ltd. organized an insightful session on 'IT Trends and Opportunities' to equip the next generation of professionals with the knowledge and skills required to excel in this dynamic domain. This event aimed to bridge the gap between academic learning and real-world industry demands, ensuring students are prepared to seize opportunities in the ever-changing IT landscape.",
    trainingDuration: "The session brought together industry experts to share their invaluable insights on the latest IT trends, including",
    sessionHighlights: [
      {
        title: "Artificial Intelligence (AI) & Machine Learning (ML)",
        points: ["An overview of AI's transformative potential and ML's application in automation and predictive analytics."]
      },
      {
        title: "Cloud Computing & Cybersecurity",
        points: ["A discussion on secure cloud solutions and the growing need for skilled cybersecurity professionals."]
      },
      {
        title: "Big Data & Analytics",
        points: ["How data drives decision-making and the opportunities in data analytics and visualization."]
      },
      {
        title: "IoT and Edge Computing",
        points: ["Exploring the future of connected devices and their role in revolutionizing industries."]
      },
      {
        title: "Career Pathways",
        points: ["Actionable advice on roles like software testing, web development, and IT management."]
      },

    ],
    keyTakeaways: [
      {
        title: "",
        description: "A clear understanding of the top IT trends shaping the industry.",
      },
      {
        title: "",
        description: "Practical advice on building a career in IT, including emerging roles and skills in demand.",
      },
      {
        title: "",
        description: "Insights into the tools and technologies driving innovation, from AI frameworks to cloud platforms."
      },
      {
        title: "",
        description: "Renewed motivation to leverage industry trends for personal and professional growth.",
      },

    ],
    highlights: ["Interactive activities, real-world examples, and success stories were woven into the presentation to keep participants engaged and inspired."],
    heroImageUrl: "/events/1-day-program-at-universal-college-of-engineering-on-it-trends-and-opportunities/1-day-program-universal-college.jpg",
    success: "This session served as a springboard for students at Universal College of Engineering to align their aspirations with industry expectations and prepare for a thriving career in the IT world. Ready to kickstart your career in software testing? Explore our certification programs designed to make you job-ready. Join our career-oriented training sessions for real-world insights into testing tools like Selenium, JIRA, and Postman. Stay ahead of the curve with Cinute Digital Pvt. Ltd.'s cutting-edge courses in software testing and quality assurance.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Universal MSG-SGKM College of Arts, Science & Commerce – Cinute Digital Pvt. Ltd",
    venueAddress: "Mumbai",
    venueDescription: "Universal College of Engineering is approved by the All India Council for Technical Education (AICTE), New Delhi; recognized by the Directorate of Technical Education (DTE), Government of Maharashtra; affiliated to Mumbai University. The college is also associated with professional bodies like IEEE, IETE, ISA and CSI to update the revolutionary technological advancements. It offers 4 years full-time Bachelor of Technology in Computer Engineering, Civil Engineering, Information Technology Engineering, Data Science, and Artificial Intelligence & Machine Learning.",
    venueImageUrl: "/events/1-day-program-at-universal-college-of-engineering-on-it-trends-and-opportunities/Universal-college-logo.jpg"
  },
  {
    id: "placement-drive-at-cinute-digital",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "placement-drive-at-cinute-digital-pvt-ltd-for-tech-mahindra-and-transunion-cibil",
    title: "Tech Mahindra and TransUnion CIBIL Placement Drive at Cinute Digital Pvt. Ltd – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2024-06-13 @ 10:00 AM",
    location: "MiraRoad East",
    attendees: 88,
    category: "Placement Drive",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Placement",
    purpose: "Cinute Digital Pvt. Ltd. recently hosted a highly successful placement drive in collaboration with Tech Mahindra and TransUnion Cibil. This event was a significant milestone in our commitment to connecting top talent with leading companies in the tech industry.",
    trainingDuration: "The session brought together industry experts to share their invaluable insights on the latest IT trends, including",
    sessionHighlights: [
      {
        title: "Overview of the Placement Drive",
        points: ["The placement drive attracted an impressive turnout, with over 250 candidates vying for opportunities with Tech Mahindra and TransUnion Cibil.", "The event was meticulously organized to ensure a smooth and efficient process, allowing candidates to showcase their skills and potential to two of the industry's most respected companies."]
      },
      {
        title: "Selection Process and Criteria",
        points: ["Throughout the day, candidates underwent a rigorous selection process that included multiple rounds of assessments, interviews, and technical evaluations.", "Both Tech Mahindra and TransUnion Cibil were looking for candidates with a strong technical foundation, problem-solving abilities, and a passion for innovation."]
      },
      {
        title: "Successful Shortlisting of Candidates",
        points: ["At the end of the drive, 16 candidates were successfully shortlisted for various roles across Tech Mahindra and TransUnion Cibil.", "These individuals demonstrated exceptional aptitude and enthusiasm, making them the perfect fit for the dynamic and challenging environments of these leading organizations."]
      },
      {
        title: "Insights from Recruiters",
        points: ["Recruiters from both Tech Mahindra and TransUnion Cibil shared positive feedback about the quality of candidates and the seamless organization of the event.", "They appreciated the opportunity to interact with a diverse pool of talent and were impressed by the readiness and professionalism of the candidates."]
      },
      {
        title: "Future Placement Drives and Opportunities",
        points: ["Building on the success of this event, Cinute Digital Pvt. Ltd. is committed to organizing more placement drives in the future.", "We aim to continue facilitating connections between talented professionals and top-tier companies, fostering growth and development for all parties involved."]
      },

    ],
    keyTakeaways: [],
    highlights: [],
    heroImageUrl: "/events/placement-drive-at-cinute-digital-pvt-ltd-for-tech-mahindra-and-transunion-cibil/Tech-Mahindra-and-TransUnion-CIBIL-scaled.jpg",
    success: "The placement drive was a resounding success, and we are proud to have played a pivotal role in advancing the careers of 16 promising candidates. Cinute Digital Pvt. Ltd. looks forward to sustaining our partnerships with Tech Mahindra and TransUnion Cibil and to hosting more such impactful events in the near future.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Cinute Digital Pvt. Ltd",
    venueAddress: "",
    venueDescription: "",
    venueImageUrl: ""
  },
  {
    id: "industrial-visit-by-viva-institute-of-technology-virar",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "industrial-visit-by-viva-institute-of-technology-virar",
    title: "Industrial Visit by VIVA Institute of Technology (2024) – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2024-03-28 @ 10:00 AM",
    location: "MiraRoad East",
    attendees: 50,
    category: "Workshop",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Software Testing",
    purpose: "Cinute Digital Pvt. Ltd., in collaboration with Testriq QA Lab, hosted an inspiring industrial visit for students from the Computer Engineering department of VIVA Institute of Technology, Virar. This event was a fantastic opportunity to bridge the gap between academia and industry, providing students with real-world insights into the field of software testing.",
    trainingDuration: "The session brought together industry experts to share their invaluable insights on the latest IT trends, including",
    sessionHighlights: [
      {
        title: "Introduction to Software Testing",
        points: ["The event kicked off with an introduction to the fundamentals of software testing, highlighting its importance in the software development lifecycle. Students learned about various testing methodologies and the role of a quality assurance team in ensuring the delivery of robust and reliable software products."]
      },
      {
        title: "Hands-On Experience with Testing Tools",
        points: ["Participants were given a hands-on demonstration of the latest testing tools used in the industry. The session provided practical exposure to automated testing tools and techniques, equipping students with the skills needed to perform functional and performance testing."]
      },
      {
        title: "Interactive Q&A Session",
        points: ["The visit concluded with an interactive Q&A session where students engaged in insightful discussions with industry experts. This session allowed them to clarify their doubts, explore career opportunities in software testing, and gain valuable advice from seasoned professionals."]
      },
      {
        title: "Tour of the Testriq Facility",
        points: ["Students were given a guided tour of the Testriq QA Lab, where they witnessed firsthand how a professional testing environment operates. They observed the workflows, processes, and tools used in real-world software testing projects."]
      },

    ],
    keyTakeaways: [],
    highlights: [],
    heroImageUrl: "/events/industrial-visit-by-viva-institute-of-technology-virar/Industrial-Visit-by-VIVA-Institute-of-Technology-scaled.jpg",
    success: "This industrial visit was a refreshing experience for both the students and our team at Cinute Digital Pvt. Ltd. It was a day filled with knowledge-sharing, inspiration, and a glimpse into the exciting world of software testing. We look forward to continuing our engagement with educational institutions to inspire and nurture the next generation of technology professionals.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "TESTRIQ QA LAB LLP",
    venueAddress: "Mira Road, Mumbai",
    venueDescription: "Testriq QA Lab LLP is a leading software testing and quality assurance company based in Mumbai, India. With over a decade of experience, Testriq offers a comprehensive suite of services, including LaunchFast QA, exploratory testing, web and mobile application testing, API testing, IoT device testing, AI application testing, robotics testing, smart device testing, ETL testing, data analysis, security testing, manual testing, regression testing, performance testing, QA documentation, and automation testing. Their team of ISTQB-certified experts collaborates with clients ranging from startups to established industry leaders, ensuring the delivery of high-quality, reliable software products. Testriq’s commitment to excellence is evident in their state-of-the-art testing infrastructure and up-to-date environments, which adhere to international standards. By focusing on minimizing risks and maximizing quality, Testriq has played a pivotal role in the success of numerous award-winning applications across diverse industries.",
    venueImageUrl: "/events/industrial-visit-by-viva-institute-of-technology-virar/Testriq-event.png"
  },
  {
    id: "6-days-workshop-on-machine-learning-1",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "6-days-workshop-on-machine-learning-with-hands-on-training-on-industry-projects",
    title: "6-Days Workshop on Machine Learning with Hands-on Training on Industry Projects – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2024-12-02 @ 10:00 AM to 2024-12-07 @ 04:00 PM",
    location: "St. John Institute of Management and Research",
    attendees: 120,
    category: "Workshop",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Machine Learning",
    purpose: "Equip participants with practical experience in data preparation, analysis, and machine learning modeling for predicting material strength in engineering contexts. Emphasize the significance of understanding factors that influence compressive strength in cement, a core material in construction.",
    trainingDuration: "The session brought together industry experts to share their invaluable insights on the latest IT trends, including",
    sessionHighlights: [
      {
        title: "Data Preparation and Exploration",
        points: ["Import essential libraries: Pandas, NumPy, Matplotlib, and Seaborn.", "Perform descriptive statistics (mean, median, mode, standard deviation) to assess feature distribution and variability."]
      },
      {
        title: "Feature Analysis",
        points: ["Create a correlation heatmap using Matplotlib and Seaborn to identify relationships between features and their impact on cement strength."]
      },
      {
        title: "Data Scaling",
        points: ["Normalize dataset values between -1 and 1 to standardize features, addressing the disparity in magnitude among features (e.g., water vs. plasticizers)."]
      },
      {
        title: "Data Splitting",
        points: ["Perform a train-test split to allow the model to learn relationships in the training data and test its predictive accuracy on unseen data."]
      },
      {
        title: "Model Training and Evaluation",
        points: ["Use Linear Regression to train the model on the training data.", "Predict and evaluate model accuracy against actual values, with an expected accuracy of around 82%."]
      },
    ],
    keyTakeaways: [
      {
        title: "Insightful Analysis",
        description: "Gain a clear understanding of influential factors impacting cement compressive strength."
      },
      {
        title: "Model Accuracy",
        description: "Develop a functional linear regression model with approximately 62% accuracy, forming a foundation for model refinement and future improvements."
      }
    ],
    highlights: [],
    heroImageUrl: "/events/6-days-workshop-on-machine-learning/6-days-workshop-on-machine-learning-2.png",
    success: "Participants successfully mastered hands-on data preparation, exploratory analysis, feature correlation visualization, data normalization, train-test splitting, and linear regression modeling, while gaining a deep understanding of the key factors that influence cement compressive strength.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "St. John Institute of Management and Research",
    venueAddress: "Palghar, Maharashtra",
    venueDescription: "St. John Institute of Management and Research (SJIMR), established in 2007, is located in Palghar, Maharashtra. Affiliated with the University of Mumbai, it offers undergraduate and postgraduate programs, including BE and MMS. The college provides modern infrastructure, skilled faculty, and focuses on practical skills and industry readiness. SJIMR emphasizes holistic development and has a strong placement record, making it a great choice for students aiming to excel in their careers.",
    venueImageUrl: "/events/6-days-workshop-on-machine-learning/ST-John-College.png"
  },
  {
    id: "power-load-forecasting-using-machine-learning",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "power-load-forecasting-using-machine-learning-short-term-training-program",
    title: "Power Load Forecasting Using Machine Learning (STTP) – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2024-11-07 @ 10:00 AM to 2024-11-08 @ 03:00 PM",
    location: "VIVA Institute of Technology",
    attendees: 90,
    category: "Short Term Training Program",
    categoryColor: "bg-blue-600",  // Green for partnership/collaboration theme
    serviceType: "Machine Learning",
    purpose: "Equip faculty with practical knowledge on building machine learning models for load demand forecasting. Emphasize the significance of accurate forecasting in the power industry for improved efficiency and reliability.",
    trainingDuration: "The session brought together industry experts to share their invaluable insights on the latest IT trends, including",
    sessionHighlights: [
      {
        title: "",
        points: ["Data Collection and Preprocessing"]
      },
      {
        title: "",
        points: ["Exploratory Data Analysis (EDA) for understanding patterns and correlations"]
      },
      {
        title: "",
        points: ["Feature Engineering for enhanced model accuracy"]
      },
      {
        title: "",
        points: ["Model Selection and Evaluation, focusing on regression-based approaches"]
      },
      {
        title: "",
        points: ["Hyperparameter Tuning for optimizing model performance"]
      },
      {
        title: "",
        points: ["Model Deployment with Flask/Django for integration with utility systems"]
      },
      {
        title: "",
        points: ["Visualization and Reporting for effective presentation of forecasted results"]
      },
    ],
    keyTakeaways: [
      {
        title: "",
        description: "Practical experience in developing, evaluating, and deploying machine learning models for power load forecasting."
      },
      {
        title: "",
        description: "Understanding of time series forecasting techniques and their applications in the power sector."
      },
      {
        title: "",
        description: "Insight into data visualization and reporting for effective decision-making."
      }
    ],
    highlights: [],
    heroImageUrl: "/events/power-load-forecasting-using-machine-learning-short-term-training-program/power-load-forecasting.jpeg",
    success: "Faculty members successfully gained hands-on expertise in building, evaluating, and deploying machine learning models for accurate power load demand forecasting, empowering them to drive greater efficiency and reliability in the power sector.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "VIVA Institute of Technology",
    venueAddress: "Virar, Maharashtra",
    venueDescription: "VIVA Institute of Technology (VIT), established in 2009, is located in Virar, Maharashtra. Affiliated with the University of Mumbai, it offers undergraduate and postgraduate programs in engineering disciplines like Mechanical, Civil, and Computer Science. The institute provides modern infrastructure, well-equipped labs, and a strong focus on practical skills. VIT has a dedicated placement cell, ensuring students secure positions in top companies. Its accessible location makes it a popular choice for students in the Mumbai region.",
    venueImageUrl: "/events/power-load-forecasting-using-machine-learning-short-term-training-program/Viva-College-LOGO.png"
  },
  {
    id: "machine-learning-algorithm-in-civil-engineering",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "seminar-on-application-of-machine-learning-algorithm-in-civil-engineering",
    title: "Seminar on Application of Machine Learning Algorithm in Civil Engineering – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2024-10-01 @ 10:00 AM",
    location: "Thane",
    attendees: 67,
    category: "Seminar",
    categoryColor: "bg-blue-600",  // Green for partnership/collaboration theme
    serviceType: "Artificial Intelligence and Machine Learning (AI-ML)",
    purpose: "Introduced students to the application of machine learning (ML) algorithms in civil engineering. Focused on the prediction of compressive strength, a critical factor in material performance and construction quality.",
    trainingDuration: "The session brought together industry experts to share their invaluable insights on the latest IT trends, including",
    sessionHighlights: [
      {
        title: "",
        points: ["Ashish provided insights into the growing significance of AI and ML technologies within civil engineering, especially in material analysis and project optimization."]
      },
      {
        title: "",
        points: ["Cezzane demonstrated the use of Multiple Linear Regression as the selected algorithm, guiding students through the data science process for predicting compressive strength."]
      },

    ],
    keyTakeaways: [
      {
        title: "",
        description: "Understanding of ML's role in civil engineering, particularly for predictive analysis."
      },
      {
        title: "",
        description: "Hands-on demonstration of multiple linear regression, showing its application to compressive strength prediction."
      },
      {
        title: "",
        description: "Practical exposure to data science concepts that enhance engineering practices through ML."
      }
    ],
    highlights: [],
    heroImageUrl: "/events/seminar-on-application-of-machine-learning-algorithm-in-civil-engineering/machine-learning-algorithm-in-civil-engineering.jpeg",
    success: "The session successfully introduced students to the power of machine learning in civil engineering, delivering a clear, hands-on demonstration of multiple linear regression for accurate prediction of concrete compressive strength and its real-world impact on construction quality.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "A. P. Shah College of Engineering, Thane",
    venueAddress: "Thane, Maharashtra",
    venueDescription: "A. P. Shah Institute of Technology (APSIT), established in 2014, is located in Thane, Maharashtra. Affiliated with the University of Mumbai, it offers undergraduate programs in various engineering disciplines like Computer Science, Mechanical, and Civil Engineering. The college is known for its modern infrastructure, experienced faculty, and a strong emphasis on research. APSIT maintains a robust placement record, with students securing positions in top companies. The college also encourages extracurricular activities to foster holistic development. Its location in Thane provides excellent industry exposure for students.",
    venueImageUrl: "/events/seminar-on-application-of-machine-learning-algorithm-in-civil-engineering/AP-Shah-college.png"
  },
  {
    id: "seminar-on-data-visualization-by-powerbi",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "seminar-on-data-visualization-by-powerbi",
    title: "Seminar on Data Visualization by PowerBI – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2024-09-18 @ 10:00 AM",
    location: "Bhayandar East",
    attendees: 50,
    category: "Seminar",
    categoryColor: "bg-blue-600",  // Green for partnership/collaboration theme
    serviceType: "Data Science",
    purpose: "Introduced students to the fundamentals of data visualization, focusing on the finance and accounting sectors. Emphasized the importance of visualizing data to improve decision-making and understand business trends.",
    trainingDuration: "The session brought together industry experts to share their invaluable insights on the latest IT trends, including",
    sessionHighlights: [
      {
        title: "",
        points: ["Session tailored specifically for accounting and finance students."]
      },
      {
        title: "Dataset used",
        points: ["Sales data to mirror real-world finance applications."]
      },

    ],
    keyTakeaways: [
      {
        title: "",
        description: "Understanding Power BI as a visualization tool and its impact on financial data analysis."
      },
      {
        title: "",
        description: "Hands-on practice with sales data to create relevant financial visualizations."
      },
      {
        title: "",
        description: "Enhanced skills in identifying key financial metrics and interpreting business performance through visuals."
      }
    ],
    highlights: ["Ashish Shetty, introduced the fundamentals of Power BI, including its importance in presenting and interpreting financial data. Cezzane Khan, a seasoned data science expert, guided the students through practical exercises using Power BI, demonstrating how to transform raw data into insightful visuals."],
    heroImageUrl: "/events/seminar-on-data-visualization-by-powerbi/seminar-on-data-visualization.jpeg",
    success: "The session successfully equipped accounting and finance students with practical Power BI skills, enabling them to transform raw sales data into powerful, insightful visualizations that drive better financial decision-making and reveal critical business trends.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "S N College",
    venueAddress: "Bhayandar East, Thane, Maharashtra",
    venueDescription: "Shankar Narayan College of Arts and Commerce, established in 1994, is located in Bhayandar East, Thane, Maharashtra. Affiliated with the University of Mumbai, it offers undergraduate and postgraduate programs in Arts, Commerce, and Science. The college is accredited with an ‘A’ grade by NAAC, reflecting its commitment to quality education. It has modern infrastructure, including labs, a library, and facilities for extracurricular activities. The college also boasts a strong placement cell, helping students secure jobs with top companies. Conveniently located, it is easily accessible by road and rail.",
    venueImageUrl: "/events/seminar-on-data-visualization-by-powerbi/SN-College-logo.png"
  },
  {
    id: "placement-drive-at-msg-sgkm-college",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "placement-drive-at-msg-sgkm-college-of-arts-science-and-commerce",
    title: "Placement Drive at MSG-SGKM College of Arts, Science and Commerce – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2024-03-23 @ 10:00 AM",
    location: "Ghatkophar",
    attendees: 49,
    category: "Placement Drive",
    categoryColor: "bg-blue-600",  // Green for partnership/collaboration theme
    serviceType: "Placement",
    purpose: "Cinute Digital Pvt. Ltd., in association with Testriq QA Lab, proudly participated in a successful placement drive at MSG-SGKM College of Arts, Science, and Commerce. This event marked a significant milestone in our ongoing efforts to connect with talented individuals and facilitate their entry into the professional world.",
    trainingDuration: "The session brought together industry experts to share their invaluable insights on the latest IT trends, including",
    sessionHighlights: [
      {
        title: "Overview of Career Opportunities in Software Testing",
        points: ["The placement drive commenced with an insightful presentation on the myriad career opportunities available in the field of software testing.", "Students were introduced to the various roles within the testing domain, including manual testing, automation testing, and quality assurance, with a focus on how these roles contribute to the overall success of software projects."]
      },
      {
        title: "Resume Building and Interview Preparation Workshop",
        points: ["Our team conducted a dedicated workshop on resume building and interview preparation, tailored specifically for aspiring software testers.", "Participants received tips on crafting a standout resume and learned key strategies for acing technical and HR interviews, ensuring they were well-prepared to showcase their skills and knowledge to potential employers."]
      },
      {
        title: "Mock Interviews and Skill Assessments",
        points: ["As part of the placement drive, we organized mock interviews and skill assessments to give students a real-world experience of the recruitment process.", "This interactive session provided valuable feedback and helped candidates identify areas of improvement, boosting their confidence for future job interviews."]
      },
      {
        title: "Networking and Future Collaborations",
        points: ["The event concluded with a networking session, where students had the opportunity to interact with industry professionals and recruiters.", "This session not only fostered connections but also laid the groundwork for future collaborations between Cinute Digital Pvt. Ltd., Testriq QA Lab, and MSG-SGKM College."]
      },

    ],
    keyTakeaways: [],
    highlights: ["We are thrilled to have been a part of this placement drive and to have witnessed so many talented individuals finding their perfect fit.", "The event was a resounding success, and we look forward to nurturing these new relationships and collaborating on future initiatives that support the growth and development of emerging professionals."],
    heroImageUrl: "/events/placement-drive-at-msg-sgkm-college-of-arts-science-and-commerce/placement-drive-at-msg-sgkm-college.jpg",
    success: "Cinute Digital Pvt. Ltd., in association with Testriq QA Lab, successfully conducted a high-impact placement drive at MSG-SGKM College, empowering students with in-depth insights into software testing careers, expert resume-building and interview preparation guidance, real-time mock interviews, and valuable industry connections that paved the way for their professional journeys.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Universal MSG-SGKM College of Arts, Science & Commerce",
    venueAddress: "Ghatkopar East, Maharashtra",
    venueDescription: "Universal MSG-SGKM College of Arts, Science & Commerce, located in Ghatkopar East, Mumbai, is a distinguished institution offering undergraduate programs in Management Studies (BMS), Accounting & Finance (BAF), Information Technology (B.Sc. IT), and Computer Science (B.Sc. CS). Established in 2009, the college has evolved into a hub for academic excellence, emphasizing a curriculum that balances theoretical knowledge with practical application. The institution boasts air-conditioned lecture rooms, well-equipped laboratories, and a gymkhana, providing a conducive learning environment. Collaborations with industry leaders like IBM and TCS offer students access to over 8,000 certification courses and opportunities to participate in digital job fairs, enhancing their employability. With a strong focus on holistic development, Universal MSG-SGKM College prepares students to excel in their chosen fields and contribute meaningfully to society.",
    venueImageUrl: "/events/placement-drive-at-msg-sgkm-college-of-arts-science-and-commerce/Universal-college-logo.jpg"
  },
  {
    id: "the-application-of-power-bi-at-vidyavardhinis",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "the-application-of-power-bi-at-vidyavardhinis-college-of-engineering-and-technology",
    title: "The Application of Power BI at Vidyavardhini's College of Engineering and Technology",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2024-03-05 @ 11:00 AM",
    location: "Vasai West",
    attendees: 56,
    category: "Seminar",
    categoryColor: "bg-blue-600",  // Green for partnership/collaboration theme
    serviceType: "Business Intelligence",
    purpose: "Cinute Digital Pvt. Ltd. is excited to share the success of our recent guest session on 'The Application of Power BI' held at Vidyavardhini's College of Engineering and Technology. This event was a significant opportunity to engage with the next generation of engineers and equip them with essential data visualization and analytics skills.",
    trainingDuration: "The session brought together industry experts to share their invaluable insights on the latest IT trends, including",
    sessionHighlights: [
      {
        title: "Introduction to Power BI",
        points: ["The session began with an introduction to Power BI, covering its importance in the data analytics landscape.", "Esha Prakash, our esteemed Head of Data Science Domain, guided students through the core functionalities of Power BI, emphasizing its role in transforming raw data into meaningful insights."]
      },
      {
        title: "Data Visualization Techniques",
        points: ["Students were introduced to various data visualization techniques using Power BI.", "Esha demonstrated how to create dynamic dashboards, customize visual elements, and interpret data patterns.", "This hands-on segment provided participants with the practical skills needed to visualize complex datasets effectively."]
      },
      {
        title: "Real-World Applications of Power BI",
        points: ["Esha shared real-world case studies showcasing how Power BI is used across different industries to drive decision-making processes.", "This segment highlighted the versatility of Power BI and inspired students to think creatively about applying these tools in their future careers."]
      },
      {
        title: "Interactive Q&A and Hands-On Practice",
        points: ["The session was designed to be highly interactive, with students actively participating in discussions and practical exercises.", "They had the opportunity to work on sample datasets, create their own visualizations, and receive immediate feedback from Esha.", "This approach ensured that students not only learned the concepts but also gained confidence in using Power BI."]
      },
      {
        title: "Collaboration and Networking",
        points: ["We extended our deepest thanks to Prof. Tatwadarshi Sir, the HOD of AI-DS, for his warm welcome and for facilitating this session.", "The event concluded with a networking opportunity, allowing students to connect with our team and explore potential career paths in data science and analytics."]
      },

    ],
    keyTakeaways: [],
    highlights: ["This guest session is a testament to Testriq QA Lab's commitment to nurturing future-ready skills and empowering students with the knowledge required to excel in the ever-evolving field of data science. We look forward to continuing our collaboration with Vidyavardhini's College of Engineering and Technology and inspiring future generations to harness the power of data."],
    heroImageUrl: "/events/the-application-of-power-bi-at-vidyavardhinis-college-of-engineering-and-technology/the-application-of-power-bi-at-vidyavardhinis.jpg",
    success: "Let's keep the momentum going, sharing knowledge, and shaping the leaders of tomorrow!",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Vidyavardhini's College of Engineering and Technology – Cinute Digital Pvt. Ltd",
    venueAddress: "Vasai, Maharashtra",
    venueDescription: "Vidyavardhini’s College of Engineering and Technology (VCET) in Vasai, Maharashtra, is a well-regarded engineering institution affiliated with the University of Mumbai. Established in 1994, VCET offers undergraduate programs in fields like Computer Science, Mechanical, Civil, and Electronics Engineering. Known for its quality education and modern facilities, the college provides a supportive learning environment with advanced labs and experienced faculty. Its active placement cell helps students secure roles in leading companies, making VCET a solid choice for engineering education in the Mumbai region.",
    venueImageUrl: "/events/the-application-of-power-bi-at-vidyavardhinis-college-of-engineering-and-technology/Vidyavardhini-college.png"
  },
  {
    id: "cmpl-expo-at-bkc-for-collaborations",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "cmpl-expo-at-bkc-for-collaborations",
    title: "CMPL Expo at BKC for Collaborations",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2024-05-17",
    location: "Jio World Convention Centre",
    attendees: 80,
    category: "Workshop",
    categoryColor: "bg-blue-600",  // Green for partnership/collaboration theme
    serviceType: "",
    purpose: "Cinute Digital Pvt. Ltd. in association with Testriq QA Lab recently participated in the prestigious Cmpl Expo held at BKC's Jio World Center in Mumbai. This event was a remarkable opportunity for us to connect with industry peers, explore new collaborations, and uncover exciting opportunities for growth and innovation.",
    trainingDuration: "The session brought together industry experts to share their invaluable insights on the latest IT trends, including",
    sessionHighlights: [
      {
        title: "Networking with Industry Leaders",
        points: ["The expo provided an invaluable platform for networking with some of the brightest minds and leading companies in the tech industry.", "Our team engaged in meaningful conversations with industry leaders, sharing insights, discussing trends, and exploring potential partnerships that align with our vision and goals."]
      },
      {
        title: "Showcasing Testriq’s Expertise",
        points: ["At our booth, we showcased Testriq QA Lab's expertise in software testing and quality assurance.", "We highlighted our latest projects, cutting-edge solutions, and the value we bring to our clients.", "This presentation was aimed at positioning Testriq as a leader in the QA industry and attracting potential collaborators interested in our services."]
      },
      {
        title: "Exploring Collaboration Opportunities",
        points: ["Throughout the event, we focused on identifying and exploring new collaboration opportunities.", "Whether it was joint ventures, technology partnerships, or expanding our service offerings, the expo was a fertile ground for discussing how we can work together with other industry players to push the boundaries of what’s possible in the world of technology."]
      },
      {
        title: "Discovering Emerging Trends and Innovations",
        points: ["The expo also served as a hub for discovering the latest trends and innovations in the tech industry.", "Our team attended various sessions and presentations, gaining insights into emerging technologies and strategies that could be leveraged to enhance our offerings and stay ahead in the competitive landscape."]
      },
      {
        title: "Building Long-Term Relationships",
        points: ["Beyond the immediate business discussions, the event was about building long-term relationships with potential partners.", "We believe that these connections will not only lead to fruitful collaborations but also contribute to the overall growth of the tech ecosystem."]
      },

    ],
    keyTakeaways: [],
    highlights: [],
    heroImageUrl: "/events/cmpl-expo-at-bkc-for-collaborations/CMPL-EXPO-thumb.jfif",
    success: "Our experience at the Cmpl Expo at BKC was both inspiring and productive. Testriq QA Lab is excited about the new possibilities that have emerged from this event, and we are eager to turn these opportunities into successful collaborations that drive innovation and success for all parties involved.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "TESTRIQ QA LAB LLP",
    venueAddress: "Mira road, mumbai, Maharashtra",
    venueDescription: "Testriq QA Lab LLP is a leading software testing and quality assurance company based in Mumbai, India. With over a decade of experience, Testriq offers a comprehensive suite of services, including LaunchFast QA, exploratory testing, web and mobile application testing, API testing, IoT device testing, AI application testing, robotics testing, smart device testing, ETL testing, data analysis, security testing, manual testing, regression testing, performance testing, QA documentation, and automation testing. Their team of ISTQB-certified experts collaborates with clients ranging from startups to established industry leaders, ensuring the delivery of high-quality, reliable software products. Testriq’s commitment to excellence is evident in their state-of-the-art testing infrastructure and up-to-date environments, which adhere to international standards. By focusing on minimizing risks and maximizing quality, Testriq has played a pivotal role in the success of numerous award-winning applications across diverse industries.",
    venueImageUrl: "/events/cmpl-expo-at-bkc-for-collaborations/Testriq-event.png"
  },
  {
    id: "job-fair-at-dj-sanghavi-college-of-engineering",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "job-fair-at-dj-sanghavi-college-of-engineering",
    title: "CMPL Expo at BKC for Collaborations",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2024-05-06",
    location: "Juhu, Mumbai",
    attendees: 80,
    category: "Career Counselling",
    categoryColor: "bg-blue-600",  // Green for partnership/collaboration theme
    serviceType: "Seminar",
    purpose: "Testriq QA Lab recently had the pleasure of participating in a vibrant job fair at DJ Sanghavi College of Engineering. The event was an incredible opportunity for us to connect with the talented and ambitious students from one of the premier engineering institutions in the country.",
    trainingDuration: "The session brought together industry experts to share their invaluable insights on the latest IT trends, including",
    sessionHighlights: [
      {
        title: "Overview of Career Opportunities at Testriq QA Lab",
        points: ["The event began with a presentation on the various career opportunities available at Testriq QA Lab.", "We provided students with insights into our work culture, the roles we are recruiting for, and how they can grow their careers within our organization.", "The session was aimed at helping students understand what it’s like to be part of a cutting-edge QA and software testing company."]
      },
      {
        title: "Interactive Booth and Networking",
        points: ["Our booth at the job fair was abuzz with activity as students eagerly visited to learn more about Testriq QA Lab.", "We engaged in one-on-one discussions, answered questions about our projects, and offered guidance on the skills and qualifications we seek in potential candidates.", "This direct interaction allowed us to gauge the enthusiasm and readiness of the students for careers in software testing and quality assurance."]
      },
      {
        title: "Resume Collection and Preliminary Interviews",
        points: ["Throughout the day, we collected resumes and conducted preliminary interviews on-site.", "This gave students a chance to showcase their skills and make a strong first impression.", "Our recruitment team was impressed by the caliber of talent, and several promising candidates were shortlisted for further evaluation."]
      },
      {
        title: "Capturing the Spirit of the Event",
        points: ["The energy of the job fair was truly infectious, and we made sure to capture the behind-the-scenes moments that highlighted the excitement of meeting future tech talent.", "From the hustle of setting up our booth to the engaging conversations with students, the day was filled with enthusiasm and potential."]
      },
      {
        title: "Future Collaborations and Opportunities",
        points: ["The event concluded with a commitment to continue fostering strong ties with DJ Sanghavi College of Engineering.", "We are excited about the possibilities of future collaborations, including internships, guest lectures, and further recruitment drives, to keep nurturing the next generation of tech professionals."]
      },

    ],
    keyTakeaways: [],
    highlights: [],
    heroImageUrl: "/events/job-fair-at-dj-sanghavi-college-of-engineering/job-fair-dj-sanghavi.jfif",
    success: "The job fair was an exhilarating experience, and we are thrilled with the connections we made. Testriq QA Lab looks forward to welcoming fresh talent into our team and helping them embark on successful careers in the dynamic field of software testing and quality assurance.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "TESTRIQ QA LAB LLP",
    venueAddress: "Mira road, mumbai, Maharashtra",
    venueDescription: "Testriq QA Lab LLP is a leading software testing and quality assurance company based in Mumbai, India. With over a decade of experience, Testriq offers a comprehensive suite of services, including LaunchFast QA, exploratory testing, web and mobile application testing, API testing, IoT device testing, AI application testing, robotics testing, smart device testing, ETL testing, data analysis, security testing, manual testing, regression testing, performance testing, QA documentation, and automation testing. Their team of ISTQB-certified experts collaborates with clients ranging from startups to established industry leaders, ensuring the delivery of high-quality, reliable software products. Testriq’s commitment to excellence is evident in their state-of-the-art testing infrastructure and up-to-date environments, which adhere to international standards. By focusing on minimizing risks and maximizing quality, Testriq has played a pivotal role in the success of numerous award-winning applications across diverse industries.",
    venueImageUrl: "/events/cmpl-expo-at-bkc-for-collaborations/Testriq-event.png"
  },
];

// Helper function to get event by slug
export const getEventBySlug = (slug: string): PastEvent | undefined => {
  return pastEvents.find(event => event.slug === slug);
};

// Helper function to get events by service type
export const getEventsByService = (serviceType: string): PastEvent[] => {
  return pastEvents.filter(event => event.serviceType === serviceType);
};

// Helper function to get featured events
export const getFeaturedEvents = (): PastEvent[] => {
  return pastEvents.filter(event => event.featured);
};

// Helper function to get events by category
export const getEventsByCategory = (category: string): PastEvent[] => {
  return pastEvents.filter(event => event.category === category);
};
