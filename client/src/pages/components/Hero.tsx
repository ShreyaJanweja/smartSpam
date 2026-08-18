import React from 'react'
import { Link } from 'react-router-dom'
import DetectionPreviewCard from './DetectionPreviewCard'

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        {/* Left column */}
        <div>
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-[#2563EB]">
            AI Security Platform
          </p>
          <h1 className="mt-5 text-[44px] font-semibold leading-[1.08] tracking-tight text-[#111111] sm:text-[56px] lg:text-[64px]">
            Detect Spam Before It Reaches You.
          </h1>
          <p className="mt-6 max-w-lg text-[18px] leading-relaxed text-[#6B7280]">
            Analyze emails and SMS using NLP and machine learning to identify
            phishing, scams, promotional spam, and suspicious messages with
            explainable results.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/spam"
              className="inline-flex items-center rounded-md bg-[#0F172A] px-5 py-3 text-[14.5px] font-medium text-white transition-colors hover:bg-[#111111]"
            >
              Try Demo
            </Link>
            <a
              href="#workflow"
              className="inline-flex items-center rounded-md border border-[#E5E7EB] px-5 py-3 text-[14.5px] font-medium text-[#111111] transition-colors hover:border-[#0F172A]"
            >
              View Architecture
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-[#E5E7EB] pt-8">
            <div>
              <p className="font-mono text-[22px] text-[#111111]">98.4%</p>
              <p className="mt-1 text-[13px] text-[#6B7280]">Detection accuracy</p>
            </div>
            <div>
              <p className="font-mono text-[22px] text-[#111111]">120ms</p>
              <p className="mt-1 text-[13px] text-[#6B7280]">Avg. response time</p>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex justify-center lg:justify-end">
          <DetectionPreviewCard />
        </div>
      </div>
    </section>
  )
}
