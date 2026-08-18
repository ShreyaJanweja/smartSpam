import React from 'react'

const reasons = [
  'Urgent payment language',
  'Mismatched sender domain',
  'Shortened URL detected',
  'Requests bank details',
]

const signals = [
  { label: 'NLP toxicity', value: 92 },
  { label: 'Link reputation', value: 88 },
  { label: 'Sender trust', value: 21 },
]

export default function DetectionPreviewCard() {
  return (
    <div className="relative w-full max-w-md rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-[0_1px_2px_rgba(17,17,17,0.04),0_12px_32px_-16px_rgba(17,17,17,0.12)]">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#DC2626]" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#DC2626]">
            Spam Detected
          </span>
        </div>
        <span className="font-mono text-[11px] text-[#6B7280]">msg_0x4F21</span>
      </div>

      {/* Risk score */}
      <div className="mt-6 flex items-end justify-between border-b border-[#E5E7EB] pb-6">
        <div>
          <p className="text-[12px] text-[#6B7280]">Risk Score</p>
          <p className="mt-1 font-mono text-[40px] leading-none tracking-tight text-[#111111]">
            97<span className="text-[18px] text-[#6B7280]">/100</span>
          </p>
        </div>
        <div className="text-right">
          <p className="text-[12px] text-[#6B7280]">Confidence</p>
          <p className="mt-1 font-mono text-[20px] leading-none text-[#111111]">98%</p>
        </div>
      </div>

      {/* Category */}
      <div className="mt-5 flex items-center justify-between">
        <p className="text-[13px] text-[#6B7280]">Category</p>
        <span className="rounded-full bg-[#0F172A] px-3 py-1 text-[12px] font-medium text-white">
          Financial Scam
        </span>
      </div>

      {/* Signal bars */}
      <div className="mt-5 space-y-3">
        {signals.map((s) => (
          <div key={s.label}>
            <div className="mb-1.5 flex items-center justify-between text-[12px]">
              <span className="text-[#6B7280]">{s.label}</span>
              <span className="font-mono text-[#111111]">{s.value}%</span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
              <div
                className="h-full rounded-full bg-[#2563EB]"
                style={{ width: `${s.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Reason chips */}
      <div className="mt-5 flex flex-wrap gap-2 border-t border-[#E5E7EB] pt-5">
        {reasons.map((reason) => (
          <span
            key={reason}
            className="rounded-md border border-[#E5E7EB] bg-[#F7F7F5] px-2.5 py-1 text-[11.5px] text-[#111111]"
          >
            {reason}
          </span>
        ))}
      </div>
    </div>
  )
}
