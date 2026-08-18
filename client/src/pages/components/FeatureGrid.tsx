import React from 'react'
import {
  IconMail,
  IconMessage,
  IconLink,
  IconStack,
  IconChart,
  IconFeedback,
} from './icons'

const features = [
  {
    icon: IconMail,
    title: 'Email Analysis',
    description: 'Scans headers, body, and attachments for phishing patterns.',
  },
  {
    icon: IconMessage,
    title: 'SMS Detection',
    description: 'Flags smishing links and impersonation attempts in texts.',
  },
  {
    icon: IconLink,
    title: 'URL Scanner',
    description: 'Checks redirects and domain reputation before you click.',
  },
  {
    icon: IconStack,
    title: 'Batch CSV',
    description: 'Upload thousands of messages and score them in one pass.',
  },
  {
    icon: IconChart,
    title: 'Analytics Dashboard',
    description: 'Track spam trends and detection accuracy over time.',
  },
  {
    icon: IconFeedback,
    title: 'User Feedback',
    description: 'Correct false positives to continuously retrain the model.',
  },
]

export default function FeatureGrid() {
  return (
    <section className="border-t border-[#E5E7EB] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-xl">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-[#6B7280]">
            Capabilities
          </p>
          <h2 className="mt-4 text-[28px] font-semibold tracking-tight text-[#111111] sm:text-[34px]">
            Everything the detector covers
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-[#E5E7EB] p-7 transition-colors hover:border-[#0F172A]"
            >
              <Icon className="h-5 w-5 text-[#2563EB]" />
              <h3 className="mt-5 text-[16px] font-medium text-[#111111]">{title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[#6B7280]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
