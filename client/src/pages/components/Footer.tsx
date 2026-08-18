import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#F7F7F5]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <span className="text-[15px] font-semibold tracking-tight text-[#111111]">
            SmartSpam
          </span>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[14px] text-[#6B7280]">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#111111]">
              GitHub
            </a>
            <a href="/docs" className="hover:text-[#111111]">
              Documentation
            </a>
            <a href="/about" className="hover:text-[#111111]">
              Team
            </a>
          </nav>
        </div>
        <p className="mt-8 text-[13px] text-[#6B7280]">
          © {new Date().getFullYear()} SmartSpam. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
