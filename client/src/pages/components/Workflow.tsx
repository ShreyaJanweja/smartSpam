import React from 'react'

const steps = [
  { label: 'Input', detail: 'Email or SMS submitted' },
  { label: 'NLP', detail: 'Language parsed and tokenized' },
  { label: 'ML Model', detail: 'Trained classifier scores intent' },
  { label: 'Risk Engine', detail: 'Signals weighted and combined' },
  { label: 'Result', detail: 'Explainable verdict returned' },
]

export default function Workflow() {
  return (
    <section id="workflow" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="max-w-xl">
        <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-[#6B7280]">
          Architecture
        </p>
        <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-[#111111] sm:text-[34px]">
          How it Works
        </h2>
      </div>

      {/* Desktop: horizontal timeline */}
      <div className="mt-16 hidden md:block">
        <div className="relative flex items-start justify-between">
          <div className="absolute left-0 right-0 top-[15px] h-px bg-[#E5E7EB]" />
          {steps.map((step, i) => (
            <div key={step.label} className="relative flex w-full flex-col items-start">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0F172A] bg-[#F7F7F5] font-mono text-[12px] text-[#0F172A]">
                {String(i + 1).padStart(2, '0')}
              </div>
              <p className="mt-4 text-[15px] font-medium text-[#111111]">{step.label}</p>
              <p className="mt-1 max-w-[10rem] text-[13px] leading-relaxed text-[#6B7280]">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="mt-12 space-y-8 md:hidden">
        {steps.map((step, i) => (
          <div key={step.label} className="relative flex gap-4 pl-1">
            {i !== steps.length - 1 && (
              <span className="absolute left-[15px] top-8 h-full w-px bg-[#E5E7EB]" />
            )}
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#0F172A] bg-[#F7F7F5] font-mono text-[12px] text-[#0F172A]">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div>
              <p className="text-[15px] font-medium text-[#111111]">{step.label}</p>
              <p className="mt-1 text-[13px] leading-relaxed text-[#6B7280]">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
