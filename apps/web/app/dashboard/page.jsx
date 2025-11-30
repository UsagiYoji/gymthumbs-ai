'use client'
import { useState } from 'react'
export default function Dashboard(){
  const [text, setText] = useState('NO EXCUSES')
  const [loading, setLoading] = useState(false)
  async function handleGenerate(e){
    e.preventDefault(); setLoading(true)
    try{
      const res = await fetch('/api/generate', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({text})})
      const j = await res.json()
      alert('Job queued — check downloads (demo)')
    }catch(err){alert('Failed')}
    setLoading(false)
  }
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl mb-4">Generator</h2>
      <form onSubmit={handleGenerate} className="flex gap-2">
        <input value={text} onChange={e=>setText(e.target.value)} className="flex-1 p-3 bg-zinc-900" />
        <button className="px-4 py-2 bg-green-600" disabled={loading}>{loading?'Generating...':'Generate'}</button>
      </form>
    </div>
  )
}
