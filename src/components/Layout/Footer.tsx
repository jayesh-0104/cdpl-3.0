'use client';

import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import dynamic from 'next/dynamic';
import React from 'react';

const Footer2 = dynamic(
  () => import("@/components/Layout/Footer2"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const CityFooter = dynamic(
  () => import("@/components/Layout/CityFooter"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
)

/** Minimal X (formerly Twitter) logo */
function XLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="X"
      width="24"
      height="24"
      fill="currentColor"
      {...props}
    >
      <path d="M18.146 2.25H21.5l-7.49 8.55 8.79 10.95H16.52l-5.36-6.68-6.13 6.68H2.67l8.02-8.74L2.25 2.25h6.18l4.86 6.03 4.856-6.03Zm-1.054 18.9h1.786L7.988 3.95H6.093l10.999 17.2Z" />
    </svg>
  );
}

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Data Science, AI - ML & BI Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Data Science</h3>
            <ul>
              <li className='flex flex-col space-y-2'>
                <Link href="/ai-course" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Comprehensive Data Science and AI - Master Program
                </Link>

                <Link href="/machine-learning-course" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Machine Learning and Data Science with Python
                </Link>

                <Link href="/generative-ai-course" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Deep Learning, NLP and Generative AI
                </Link>

                <Link href="/data-science-course" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Advanced Data Science &amp; Machine Learning Masterclass
                </Link>

                <Link href="/machine-learning-using-python" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Machine Learning Algorithms using python Programming
                </Link>

                <Link href="/data-visualization-in-r-programming" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Machine Learning and Data Visualization using R Programming
                </Link>

              </li>
            </ul>

            {/* Artificial Intelligence */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-400">Artificial Intelligence(AI)</h3>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <Link href="/prompt-engineering-course" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    Prompt Engineering with Gen AI
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us (desktop) */}
            <div className="space-y-4 hidden lg:block">
              <h3 className="text-lg font-semibold text-orange-400">Follow Us On</h3>
              <ul className="space-y-2">
                <li className='flex items-center gap-5'>
                  <Link href="https://www.facebook.com/cinutedigital" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="Facebook">
                    <Facebook />
                  </Link>

                  <Link href="https://x.com/cinutedigital" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="X">
                    <XLogo />
                  </Link>

                  <Link href="https://www.youtube.com/@cinutedigital" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="YouTube">
                    <Youtube />
                  </Link>

                  <Link href="https://www.linkedin.com/company/cinute-digital/" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="LinkedIn">
                    <Linkedin />
                  </Link>

                  <Link href="https://www.instagram.com/cinutedigital/" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="Instagram">
                    <Instagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Software Testing Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Software Testing Courses</h3>
            <ul>
              <li className='flex flex-col space-y-2'>
                <Link href="/manual-testing-course" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Manual Software Testing
                </Link>

                <Link href="/api-testing" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  API Testing using POSTMAN and RestAPIs
                </Link>

                <Link href="/dbms-course" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Database Management System using MySQL
                </Link>

                <Link href="/etl-testing" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  ETL Testing Course
                </Link>

                <Link href="/advance-software-testing" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Advanced Software Testing
                </Link>

                <Link href="/automation-testing-course" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Advanced Automation Testing
                </Link>

                <Link href="/advance-manual-automation-testing" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Advanced Manual and Automation Testing
                </Link>

                <Link href="/advance-manual-automation-testing" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Advanced Manual and Automation Testing
                </Link>

                <Link href="/python-course" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Python Programming
                </Link>

                <Link href="/java-course" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Java Programming
                </Link>
              </li>
            </ul>

            {/* Digital Marketing */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-400">Digital Marketing</h3>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <Link href="/digital-marketing-course" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    Digital Marketing and Analytics - Master Program
                  </Link>

                  <Link href="/ai-in-digital-marketing" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    Digital Marketing and AI (For Business Owners)
                  </Link>

                  <Link href="/ai-bootcamp" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    Digital Marketing With AI Bootcamp
                  </Link>
                </li>
              </ul>
            </div>

            {/* Programming Languages */}
            {/* <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-400">Programming Languages</h3>
              <ul>
                <li className='flex flex-col space-y-2'>

                </li>
              </ul>
            </div> */}
          </div>

          {/* Digital Marketing */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Business Development(BI)</h3>
            <ul>
              <li className='flex flex-col space-y-2'>
                <Link href="/data-analytics" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Advanced Data Analytics - Hero Program
                </Link>

                <Link href="/data-analytics-python" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Advanced Data Analytics with Python Libraries
                </Link>

                <Link href="/data-analytics-and-visualization" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Excel for Data Analytics & Visualization
                </Link>

                <Link href="/data-analytics-with-tableau" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Data Analytics & Visualization with Tableau
                </Link>

                <Link href="/power-bi-course" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Data Analytics & Visualization with Power BI
                </Link>

                <Link href="/masters-in-data-engineering" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Data Analytics With BI And Big Data Engineering - Master Program
                </Link>

              </li>
            </ul>
          </div>

          {/* City Pages */}
          {/* <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Cities</h3>
            <ul>
              <li className='flex flex-col space-y-2'>
                <Link href="/software-testing-course-in-mumbai" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Mumbai
                </Link>

                <Link href="/software-testing-course-in-chennai" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Chennai
                </Link>

                <Link href="/software-testing-course-in-kolkata" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Kolkata
                </Link>

                <Link href="/software-testing-course-in-bengaluru" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Bengaluru
                </Link>

                <Link href="/software-testing-course-in-hyderabad" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Hyderabad
                </Link>

                <Link href="/software-testing-course-in-pune" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Pune
                </Link>

                <Link href="/software-testing-course-in-delhi" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Delhi
                </Link>

                <Link href="/software-testing-course-in-ahmedabad" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Ahmedabad
                </Link>

                <Link href="/software-testing-course-in-surat" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Surat
                </Link>

                <Link href="/software-testing-course-in-jodhpur" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Jodhpur
                </Link>

                <Link href="/software-testing-course-in-jaipur" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Jaipur
                </Link>

                <Link href="/software-testing-course-in-aurangabad" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Aurangabad
                </Link>

                <Link href="/software-testing-course-in-kochi" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Kochi
                </Link>

                <Link href="/software-testing-course-in-chandigarh" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Chandigarh
                </Link>

                <Link href="/software-testing-course-in-patna" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Patna
                </Link>

                <Link href="/software-testing-course-in-indore" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Indore
                </Link>

                <Link href="/software-testing-course-in-bhubaneswar" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Bhubaneswar
                </Link>

                <Link href="/locations-we-serve" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  View All Cities
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Blogs and Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Blogs</h3>
            <ul>
              <li className='flex flex-col space-y-2'>
                <Link href="/blog" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Blogs
                </Link>

                <Link href="/blog/category/software-testing" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Software Testing
                </Link>

                <Link href="/blog/category/data-science" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Data Science
                </Link>

                <Link href="/blog/category/web-development" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Web Development
                </Link>

                <Link href="/blog/category/artificial-intelligence" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  AI &amp; Machine Learning
                </Link>

                <Link href="/blog/category/digital-marketing" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Institute */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Institute</h3>
            <ul>
              <li className='flex flex-col space-y-2'>
                <Link href="/services" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Services
                </Link>

                <Link href="/events/past-events" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Events
                </Link>

                <Link href="/mentors" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Mentors
                </Link>

                <Link href="/jobs/placements" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Placements
                </Link>

                <Link href="/jobs/live-jobs" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Live Jobs
                </Link>

                <Link href="/jobs/job-openings" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Job Openings
                </Link>

                <Link href="/jobs/careers" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Careers
                </Link>

                <Link href="/about-us" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  About CDPL
                </Link>

                <Link href="/our-team" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Our Team
                </Link>

                <Link href="/reviews" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Reviews
                </Link>

                <Link href="/cdpl-affiliate-program" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Affiliate Program
                </Link>

                <Link href="/contact-us" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Certifications and Accreditation */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-400">Certifications and Accreditation</h3>
              <ul>
                <li className='flex flex-col space-y-2'>
                  <Link href="/aaa-certification" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    AAA Certification
                  </Link>

                  <Link href="/actd-certification" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    ACTD Certification
                  </Link>

                  <Link href="/cdpl-certificate-validation" className="text-gray-300 hover:text-brand hover:translate-x-2 transition-all duration-300 ease-in-out text-sm">
                    Validate Your Certificate
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us (mobile) */}
            <div className="space-y-4 lg:hidden">
              <h3 className="text-lg font-semibold text-orange-400">Follow Us On</h3>
              <ul className="space-y-2">
                <li className='flex items-center gap-5'>
                  <Link href="https://www.facebook.com/cinutedigital" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="Facebook">
                    <Facebook />
                  </Link>

                  <Link href="https://x.com/cinutedigital" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="X">
                    <XLogo />
                  </Link>

                  <Link href="https://www.youtube.com/@cinutedigital" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="YouTube">
                    <Youtube />
                  </Link>

                  <Link href="https://www.linkedin.com/company/cinute-digital/" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="LinkedIn">
                    <Linkedin />
                  </Link>

                  <Link href="https://www.instagram.com/cinutedigital/" className="text-gray-300 hover:text-brand transition-all duration-300 ease-in-out text-sm" aria-label="Instagram">
                    <Instagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <CityFooter />

      <Footer2 />
    </footer>
  );
};

export default Footer;
