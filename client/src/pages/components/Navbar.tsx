import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IconGithub } from './icons'

const links = [
  { to: '/', label: 'Home' },
  { to: '/spam', label: 'Detector' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-[#F7F7F5]/90 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Left: wordmark */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-[19px] font-semibold tracking-tight text-[#111111]">
            SmartSpam
          </span>
        </Link>

        {/* Center: nav links */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  'text-[14.5px] transition-colors',
                  isActive
                    ? 'font-medium text-[#111111]'
                    : 'text-[#6B7280] hover:text-[#111111]',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[#E5E7EB] px-4 py-2 text-[14px] font-medium text-[#111111] transition-colors hover:border-[#0F172A]"
          >
            <IconGithub className="h-4 w-4" />
            GitHub
          </a>
          <Link
            to="/spam"
            className="inline-flex items-center rounded-md bg-[#0F172A] px-4 py-2 text-[14px] font-medium text-white transition-colors hover:bg-[#111111]"
          >
            Try Detector
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-[#E5E7EB] md:hidden"
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-4 bg-[#111111] transition-transform ${
                open ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 bg-[#111111] transition-opacity ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-[1.5px] w-4 bg-[#111111] transition-transform ${
                open ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#E5E7EB] bg-[#F7F7F5] px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    'text-[15px]',
                    isActive ? 'font-medium text-[#111111]' : 'text-[#6B7280]',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#E5E7EB] px-4 py-2 text-[14px] font-medium text-[#111111]"
            >
              <IconGithub className="h-4 w-4" />
              GitHub
            </a>
            <Link
              to="/spam"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-md bg-[#0F172A] px-4 py-2 text-[14px] font-medium text-white"
            >
              Try Detector
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
