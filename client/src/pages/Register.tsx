import React from 'react'

export default function Register(){
  return (
    <div className="max-w-md">
      <h2 className="text-2xl font-semibold">Register</h2>
      <form className="mt-4 space-y-3">
        <input className="w-full p-2 border rounded" placeholder="Name" />
        <input className="w-full p-2 border rounded" placeholder="Email" />
        <input className="w-full p-2 border rounded" placeholder="Password" type="password" />
        <button className="px-4 py-2 bg-slate-800 text-white rounded">Register</button>
      </form>
    </div>
  )
}
