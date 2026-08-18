import React from 'react'
import { IconEye, IconGauge, IconShield } from './icons'

const items = [
  {
    icon: IconShield,
    title: 'Spam Detection',
    description: 'NLP-powered message classification.',
  },
  {
    icon: IconEye,
    title: 'Explainable AI',
    description: 'Understand why a message looks suspicious.',
  },
  {
    icon: IconGauge,
    title: 'Risk Analysis',
    description: 'Confidence, category, and security signals.',
  },
]

export default function WhySection() {
  return (
    <section className="border-t border-[#E5E7EB] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-xl">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-[#6B7280]">
            Why SmartSpam
          </p>
          <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-[#111111] sm:text-[34px]">
            Built for clarity, not just detection.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#E5E7EB] sm:grid-cols-3">
          {items.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white p-8">
              <Icon className="h-6 w-6 text-[#0F172A]" />
              <h3 className="mt-5 text-[17px] font-medium text-[#111111]">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#6B7280]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
