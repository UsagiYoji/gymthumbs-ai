import { NextResponse } from 'next/server'
export async function POST(req){
  const body = await req.json()
  const { text='NO EXCUSES' } = body
  return NextResponse.json({ ok: true, message: 'queued', prompt: text })
}
