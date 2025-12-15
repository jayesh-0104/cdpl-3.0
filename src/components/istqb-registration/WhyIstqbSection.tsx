import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, Globe2, Info, TrendingUp, Clock, Wallet, ShieldCheck, Check } from 'lucide-react';

export default function WhyIstqbSection() {
    return (
        <section className="relative py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm"
            >
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        Why ISTQB is the Best Testing Certification?
                    </h2>
                    <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                        The ISTQB (International Software Testing Qualifications Board) certification is widely recognized as the best in software testing due to its global recognition, structured learning path, and career-boosting benefits. Here&rsquo;s why it stands out:
                    </p>

                    <div className="space-y-10">
                        {/* 1. Globally Recognized */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Globe2 className="w-6 h-6 text-orange-500" />
                                <h3 className="font-bold text-slate-800 text-lg">Globally Recognized & Industry Standard</h3>
                            </div>
                            <ul className="space-y-3 pl-1">
                                {[
                                    "Accepted in 130+ countries with over 1 million certified professionals",
                                    "Recognized by top companies as the gold standard for software testing",
                                    "Aligns with international best practices"
                                ].map((text, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <span className="bg-emerald-500 rounded flex items-center justify-center w-5 h-5 mt-0.5 flex-shrink-0">
                                            <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                        </span>
                                        <span className="text-slate-600 leading-snug">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 2. Structured Learning Path */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center">
                                    <span className="text-orange-500 font-bold text-xs">i</span>
                                </div>
                                <h3 className="font-bold text-slate-800 text-lg">Structured Learning Path</h3>
                            </div>
                            <ul className="space-y-3 pl-1">
                                {[
                                    "Multiple levels for career growth: Foundation, Advanced, and Expert",
                                    "Covers Manual Testing, Automation, Agile, and Test Management"
                                ].map((text, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <span className="bg-emerald-500 rounded flex items-center justify-center w-5 h-5 mt-0.5 flex-shrink-0">
                                            <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                        </span>
                                        <span className="text-slate-600 leading-snug">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 3. Enhances Career */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <TrendingUp className="w-6 h-6 text-orange-500" />
                                <h3 className="font-bold text-slate-800 text-lg">Enhances Career & Salary Prospects</h3>
                            </div>
                            <ul className="space-y-3 pl-1">
                                {[
                                    "Certified professionals earn higher salaries",
                                    "Boosts job opportunities in top companies and global enterprises",
                                    "Essential for roles like QA Engineer, Test Manager, and Automation Engineer"
                                ].map((text, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <span className="bg-emerald-500 rounded flex items-center justify-center w-5 h-5 mt-0.5 flex-shrink-0">
                                            <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                        </span>
                                        <span className="text-slate-600 leading-snug">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 4. No Expiry */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Clock className="w-6 h-6 text-orange-500" />
                                <h3 className="font-bold text-slate-800 text-lg">No Expiry – Lifetime Validity</h3>
                            </div>
                            <p className="text-slate-600 pl-1">
                                Unlike other certifications, ISTQB never expires, so no renewals are needed.
                            </p>
                        </div>

                        {/* 5. Cost-Effective */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Wallet className="w-6 h-6 text-orange-500" />
                                <h3 className="font-bold text-slate-800 text-lg">Cost-Effective & Flexible</h3>
                            </div>
                            <ul className="space-y-3 pl-1">
                                {[
                                    "More affordable than many other certifications",
                                    "No mandatory training required – self-study is an option",
                                    "Available in multiple languages and global locations"
                                ].map((text, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <span className="bg-emerald-500 rounded flex items-center justify-center w-5 h-5 mt-0.5 flex-shrink-0">
                                            <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                        </span>
                                        <span className="text-slate-600 leading-snug">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 6. Industry-Aligned */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <ShieldCheck className="w-6 h-6 text-orange-500" />
                                <h3 className="font-bold text-slate-800 text-lg">Industry-Aligned & Future-Proof</h3>
                            </div>
                            <ul className="space-y-3 pl-1">
                                {[
                                    "Regularly updated to reflect trends (Agile, DevOps, AI in Testing)",
                                    "Keeps professionals ahead in the evolving testing landscape"
                                ].map((text, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <span className="bg-emerald-500 rounded flex items-center justify-center w-5 h-5 mt-0.5 flex-shrink-0">
                                            <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                        </span>
                                        <span className="text-slate-600 leading-snug">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
