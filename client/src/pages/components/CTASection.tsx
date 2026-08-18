import React from 'react'
import { Link } from 'react-router-dom'
import { IconGithub } from './icons'

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-[30px] font-semibold leading-tight tracking-tight text-[#111111] sm:text-[34px]">
          Build Safer Communication with AI
        </h2>
        <p className="mt-4 text-[16px] text-[#6B7280]">
          Run your first message through the detector or explore the source.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/spam"
            className="inline-flex items-center rounded-md bg-[#0F172A] px-6 py-3 text-[14.5px] font-medium text-white transition-colors hover:bg-[#111111]"
          >
            Start Detecting
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[#E5E7EB] px-6 py-3 text-[14.5px] font-medium text-[#111111] transition-colors hover:border-[#0F172A]"
          >
            <IconGithub className="h-4 w-4" />
            View GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
