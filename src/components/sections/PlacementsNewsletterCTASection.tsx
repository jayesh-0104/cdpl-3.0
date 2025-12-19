"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

type Props = {
    /**
     * Horizontal consistency:
     * - If your page already wraps content with `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`,
     *   keep `contained` = false (default) to avoid double padding.
     * - Set `contained` = true only when this section must provide that container itself.
     */
    contained?: boolean;
};

export default function PlacementsNewsletterCTASection({ contained = false }: Props) {
    const [email, setEmail] = useState("");

    return (
        <section className="w-full py-6 sm:py-8" aria-label="CDPL newsletter subscription">
            <Wrapper contained={contained}>
                <div
                    className={[
                        "rounded-3xl border border-gray-200/60 shadow-sm",
                        "bg-white", // gradient removed
                        "p-6 sm:p-8",
                    ].join(" ")}
                >
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        {/* Copy */}
                        <div>
                            {/* Non-hero title scale */}
                            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                                <span className="text-[rgb(0,105,168)]">Get Placement </span>
                                <span className="text-[rgb(255,140,0)]">Updates</span>
                            </h3>
                            {/* Non-hero body scale */}
                            <p className="mt-1 text-sm sm:text-base text-slate-700">
                                New offers, partner companies, and cohort invites, straight to your inbox.
                            </p>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                // handle submit here
                            }}
                            className="
                flex w-full max-w-md items-center gap-2
                max-[325px]:flex-col max-[325px]:items-stretch max-[325px]:gap-3
              "
                        >
                            <div className="relative flex-1">
                                <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@domain.com"
                                    aria-label="Email address"
                                    className="w-full rounded-xl border border-gray-200/80 bg-white/90 pl-9 pr-3 py-3 text-slate-900 placeholder:text-slate-400 outline-none ring-0
                             focus:border-[#ff8c00]/50 focus:ring-2 focus:ring-[#ff8c00]/30"
                                />
                            </div>
                            <button
                                type="submit"
                                className="rounded-xl bg-[#ff8c00] px-4 py-3 text-white transition-transform duration-200
                           hover:opacity-95 hover:-translate-y-0.5
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff8c00]
                           max-[325px]:w-full"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

const Wrapper = ({ contained, children }: { contained: boolean; children: React.ReactNode }) =>
    contained ? (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    ) : (
        <>{children}</>
    );
