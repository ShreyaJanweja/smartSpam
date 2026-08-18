import React, { useState } from 'react'

export default function SpamDetector(){
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  const analyze = () => {
    setLoading(true)
    // Placeholder: no AI call yet
    setTimeout(() => setLoading(false), 800)
  }

  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-semibold">Spam Detector</h2>
      <p className="mt-2 text-slate-600">Paste email or SMS text below to analyze.</p>

      <textarea value={text} onChange={e=>setText(e.target.value)} rows={8} className="w-full mt-4 p-3 border rounded" placeholder="Enter message text here"></textarea>
      <div className="mt-3">
        <button onClick={analyze} className="px-4 py-2 bg-slate-800 text-white rounded" disabled={loading}>{loading? 'Analyzing...' : 'Analyze'}</button>
      </div>

      <section className="mt-6 p-4 border rounded bg-white">
        <h3 className="font-medium">Result (placeholder)</h3>
        <div className="mt-2 text-slate-600">No prediction yet. ML service to be integrated later.</div>
      </section>
    </div>
  )
}
