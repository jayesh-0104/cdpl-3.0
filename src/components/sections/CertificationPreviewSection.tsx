"use client";
/** Minimal certificate preview card that prefers a public image if present */
import Image from "next/image";
import { useState } from "react";
import type { Certificate } from "@/data/certificates/registry";

export function CertificationPreviewSection({ cert, onClick }: { cert: Certificate; onClick?: () => void }) {
  // Use explicit imageUrl from registry if available, else fallback to constructed path
  const imgSrc = cert.imageUrl || `/certificates/${cert.id}.jpg`;
  const [imgOk, setImgOk] = useState(true);

  if (imgOk) {
    return (
      <div className="w-full rounded-xl border border-slate-200 bg-white p-2">
        <button
          type="button"
          onClick={onClick}
          className={`w-full ${onClick ? 'cursor-zoom-in' : ''}`}
          aria-label="Expand certificate image"
        >
          <Image
            src={imgSrc}
            alt={`${cert.id} preview`}
            width={900}
            height={640}
            className="h-auto w-full rounded-lg"
            priority={false}
            onError={() => setImgOk(false)} // fallback to card if image missing
          />
        </button>
      </div>
    );
  }

  // Fallback: styled data card if no image
  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white p-4">
      <div className="rounded-lg border border-slate-200 bg-gradient-to-br from-orange-50/70 to-white p-4">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-extrabold tracking-tight text-slate-900">
            {cert.program} Certificate — {cert.status}
          </h4>
          <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold">
            CDPL
          </span>
        </div>
        <div className="mt-3 grid gap-2 text-sm text-slate-800 sm:grid-cols-2">
          <div>
            <div className="font-semibold">Certificate ID</div>
            <div className="break-all">{cert.id}</div>
          </div>

          <div>
            <div className="font-semibold">Holder</div>
            <div>{cert.holder}</div>
          </div>
          <div>
            <div className="font-semibold">Program</div>
            <div>{cert.program}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

