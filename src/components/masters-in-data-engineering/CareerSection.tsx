"use client";

import React, { useState } from "react";
import { CareerRole, HiringCompany } from "./types";
import { Briefcase, Target, TrendingUp, Users } from "lucide-react";
import CareerSessionModal from "../CareerSessionModal";

const careerRoles: CareerRole[] = [
  {
    id: 1,
    title: "Business Intelligence Analyst",
    description: "Focus on reporting, dashboards, and data-driven strategy.",
    salaryRange: "₹6 L - ₹15 L",
  },
  {
    id: 2,
    title: "Data Analyst",
    description:
      "Focus on statistical analysis, insight generation, and data storytelling.",
    salaryRange: "₹5 L - ₹12 L",
  },
  {
    id: 3,
    title: "Big Data Engineer",
    description:
      "Focus on building and maintaining scalable data pipelines and infrastructure.",
    salaryRange: "₹8 L - ₹25 L+",
  },
];

const hiringCompanies: HiringCompany[] = [
  { id: 1, name: "Amazon", logo: "/logos/amazon.svg" },
  { id: 2, name: "Accenture", logo: "/logos/accenture.svg" },
  { id: 3, name: "TCS", logo: "/logos/tcs.svg" },
  { id: 4, name: "Wipro", logo: "/logos/wipro.svg" },
  { id: 5, name: "Google", logo: "/logos/google.svg" },
  { id: 6, name: "Microsoft", logo: "/logos/microsoft.svg" },
];

const CareerSection: React.FC = () => {
  const [isCareerSessionOpen, setIsCareerSessionOpen] = useState(false);
  const courseName = "Data Analytics with BI & Big Data Engineering Master Program";

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-sm font-semibold tracking-[0.25em] text-teal-600 uppercase">
            Career Advancement
          </h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            High-Impact <span className="text-teal-600">Career Opportunities</span>
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our graduates are prepared for the most in-demand roles in the data
            industry, commanding competitive salaries.
          </p>
          <p className="mt-3 text-sm text-slate-500 max-w-3xl mx-auto">
            This <strong>Data Analytics with BI and Big Data Engineering Master Program</strong>{" "}
            opens doors to high-growth roles like{" "}
            <strong>Business Intelligence Analyst</strong>,{" "}
            <strong>Data Analyst</strong>, and <strong>Big Data Engineer</strong>{" "}
            across top <em>IT, consulting, product, and cloud companies</em> in
            India and global markets.
          </p>
        </div>

        {/* Target Roles / Job Roles Grid */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold text-slate-900 text-center mb-8 flex items-center justify-center">
            <Target className="h-6 w-6 text-teal-600 mr-2" /> Target Roles
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerRoles.map((role) => (
              <div
                key={role.id}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border-2 border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300 group text-left"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4 text-teal-600 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-8 h-8" />
                </div>

                {/* Title */}
                <h5 className="text-lg font-bold text-slate-900 mb-2 text-center">
                  {role.title}
                </h5>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4 text-center">
                  {role.description}
                </p>

                {/* Salary */}
                <div className="pt-4 border-t border-slate-300 text-center">
                  <p className="text-xs text-slate-600 mb-1">
                    Expected Salary Range (India)
                  </p>
                  <p className="text-lg font-bold text-teal-600 inline-flex items-center justify-center gap-1">
                    {role.salaryRange}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Growth Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Career Growth & Opportunities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Rapid Career Growth",
                description:
                  "Data professionals see 40–50% salary growth within 2–3 years of experience in analytics, BI, and Big Data roles.",
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Multiple Career Paths",
                description:
                  "Start as a Data Analyst or BI Analyst and move into specialized roles such as Big Data Engineer, Analytics Engineer, or Data Architect.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Global Opportunities",
                description:
                  "Work with top MNCs and tech giants worldwide, with options for remote and on-site positions in data-driven teams.",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4 text-orange-400">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-300 sm:text-sm text-center">
            Keywords: Data Analytics Career Path • Business Intelligence Analyst Salary •
            Big Data Engineer Jobs in India • Analytics Career Growth • Job-Oriented BI and
            Big Data Course • High-Paying Data Roles.
          </p>
        </div>

        {/* Top Hiring Companies */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-teal-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
            Our Graduates Work At
          </h3>
          <p className="text-sm text-slate-600 mb-8 text-center max-w-3xl mx-auto">
            Alumni from this <strong>Data Analytics with BI and Big Data Engineering</strong>{" "}
            program have the skills to apply for roles at leading{" "}
            <em>product companies, IT service firms, consulting giants, and cloud providers</em>.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {hiringCompanies.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-lg p-6 border border-teal-200 text-center hover:shadow-lg transition-shadow flex items-center justify-center h-24"
              >
                {/* Placeholder for Company Logo (using name for now) */}
                <div>
                  <p className="font-bold text-slate-900">{company.name}</p>
                  {/* <p className="text-xs text-slate-500 mt-1">Active Hiring</p> */}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-600 sm:text-sm text-center">
            Top recruiters include{" "}
            <strong>Amazon, Accenture, TCS, Wipro, Google, Microsoft</strong> and many more
            organizations building <strong>data platforms, BI dashboards, and Big Data
              solutions</strong>.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsCareerSessionOpen(true)}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-all inline-block cursor-pointer"
          >
            Book a Free Career Session
          </button>
        </div>
      </div>

      <CareerSessionModal
        isOpen={isCareerSessionOpen}
        onClose={() => setIsCareerSessionOpen(false)}
        source="Data Engineering Course Page - Career Section - Career Session"
        courseName={courseName}
      />
    </section>
  );
};

export default CareerSection;
