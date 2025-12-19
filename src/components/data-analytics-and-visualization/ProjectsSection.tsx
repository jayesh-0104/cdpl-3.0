"use client";
import { useState } from "react";
import { TrendingUp, PieChart, Users } from "lucide-react";
import SyllabusDownloadModal from "../SyllabusDownloadModal";


const projects = [
    {
        title: "Sales Performance Analysis",
        domain: "Retail",
        description: "Analyzing sales data to evaluate the performance of a retail chain across multiple stores. Identify top-performing products, regions, and sales trends to optimize inventory and marketing strategies.",
        skills: ["Data Analytics", "PivotTables", "Excel Charts", "Conditional Formatting", "Retail Domain Knowledge"],
        icon: "TrendingUp",
    },
    {
        title: "Budget Variance Analysis",
        domain: "Finance",
        description: "Comparing actual financial performance against budgeted figures for a corporate firm. Identify variances, analyze their causes, and visualize financial health to support strategic planning.",
        skills: ["Data Analytics", "Excel Formulas", "PivotTables", "Data Visualization", "Finance Domain Knowledge"],
        icon: "PieChart",
    },
    {
        title: "Customer Insights Dashboard",
        domain: "Marketing",
        description: "Creating comprehensive dashboards to analyze customer behavior, preferences, and engagement metrics. Drive data-informed marketing strategies and improve customer retention.",
        skills: ["Dashboard Creation", "Data Analysis", "Visualization", "Marketing Analytics"],
        icon: "Users",
    },
];

export default function ProjectsSection() {
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
    const courseName = "Advanced Excel for Data Analytics & Visualization";

    return (
        <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Real-World <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Work on industry-relevant projects that mirror real business scenarios. Build a portfolio that impresses employers.
                    </p>
                </div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {projects.map((project, index) => {
                        const iconMap = {
                            TrendingUp: TrendingUp,
                            PieChart: PieChart,
                            Users: Users,
                        };
                        const Icon = iconMap[project.icon as keyof typeof iconMap] || TrendingUp;
                        const colors = [
                            { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
                            { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200" },
                            { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
                        ];
                        const color = colors[index % colors.length];

                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                            >
                                {/* Header with domain */}
                                <div className={`${color.bg} ${color.border} border-b px-6 py-4`}>
                                    <div className="flex items-center justify-between">
                                        <span className={`text-sm font-semibold ${color.text}`}>
                                            Domain: {project.domain}
                                        </span>
                                        <Icon className={`w-6 h-6 ${color.text}`} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Skills */}
                                    <div className="space-y-3 pt-4 border-t border-slate-200">
                                        <p className="text-sm font-semibold text-slate-900">
                                            Skills You&apos;ll Develop:
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className={`text-xs font-medium px-3 py-1 rounded-full ${color.bg} ${color.text}`}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom accent */}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                                    style={{
                                        background: `linear-gradient(to right, currentColor)`,
                                    }}
                                ></div>
                            </div>
                        );
                    })}
                </div>

                {/* Project methodology */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl px-6 py-8 md:p-12 text-white">
                    <h3 className="text-3xl font-bold mb-8">Our Project Methodology</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "1",
                                title: "Problem Understanding",
                                description: "Analyze business requirements and data structure",
                            },
                            {
                                step: "2",
                                title: "Data Exploration",
                                description: "Clean, validate, and prepare datasets",
                            },
                            {
                                step: "3",
                                title: "Analysis & Visualization",
                                description: "Create insights using Excel tools",
                            },
                            {
                                step: "4",
                                title: "Presentation",
                                description: "Build dashboards and present findings",
                            },
                        ].map((item, index) => (
                            <div key={index} className="relative">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">{item.title}</h4>
                                        <p className="text-slate-300 text-sm">{item.description}</p>
                                    </div>
                                </div>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-6 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <button
                        onClick={() => setIsSyllabusOpen(true)}
                        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-all inline-block cursor-pointer"
                    >
                        Download Project Guide
                    </button>
                </div>
            </div>

            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="Data Analytics & Visualization Course Page - Projects Section - Download Guide"
                courseName={courseName}
            />
        </section>
    );
}
