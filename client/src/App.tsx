import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import SpamDetector from './pages/SpamDetector'
import History from './pages/History'
import Analytics from './pages/Analytics'
import About from './pages/About'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="p-4 shadow-sm bg-white">
        <div className="container mx-auto flex gap-4">
          <Link to="/" className="font-bold">SmartSpam</Link>
          <Link to="/spam" className="ml-4">Spam Detector</Link>
          <Link to="/dashboard" className="ml-4">Dashboard</Link>
        </div>
      </nav>
      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/spam" element={<SpamDetector />} />
          <Route path="/history" element={<History />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}
