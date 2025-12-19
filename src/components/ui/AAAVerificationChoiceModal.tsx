"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AlertCircle, Link as LinkIcon } from "lucide-react";
import { Certificate } from "@/data/certificates/registry";

interface AAAVerificationChoiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    certificate?: Certificate | null; // If present, shows generic ID or specific ID
    onOfficialVerify: () => void;
    onCdplVerify: () => void;
}

export function AAAVerificationChoiceModal({
    isOpen,
    onClose,
    certificate,
    onOfficialVerify,
    onCdplVerify,
}: AAAVerificationChoiceModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Optional: Lock body scroll when open
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-900/5"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className="absolute right-4 top-4 rounded-full bg-slate-100 p-1 text-slate-500 hover:bg-slate-200"
                    onClick={onClose}
                >
                    <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-orange-100 p-3">
                        <AlertCircle className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                        Verify AAA Certificate
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                        {certificate ? (
                            <>
                                This is an AAA Accredited certificate (ID:{" "}
                                <span className="font-mono font-medium text-slate-900">
                                    {certificate.id}
                                </span>
                                ).
                            </>
                        ) : (
                            "You are verifying an AAA Accredited certificate."
                        )}
                        <br />
                        How would you like to verify it?
                    </p>

                    <div className="mt-6 flex w-full flex-col gap-3">
                        <button
                            onClick={onOfficialVerify}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                        >
                            <span>Verify on Official Site (AAA)</span>
                            <LinkIcon className="h-4 w-4" />
                        </button>
                        <button
                            onClick={onCdplVerify}
                            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900"
                        >
                            <span>Verify with CDPL</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
