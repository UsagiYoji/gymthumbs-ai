import Link from 'next/link'
export default function Page(){
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-extrabold mb-6">Generate viral gym thumbnails in seconds</h1>
      <p className="max-w-xl text-lg mb-6">Dark cinematic presets, silhouette poses, punching bag & machine presets — TikTok-ready.</p>
      <div className="flex gap-4">
        <Link href="/dashboard" className="px-6 py-3 bg-green-600 rounded">Try 5 FREE</Link>
        <a href="#pricing" className="px-6 py-3 border rounded">Pricing</a>
      </div>
      <section id="examples" className="mt-10 grid grid-cols-2 gap-4 w-full max-w-3xl">
        <img src="/examples/sample1.png" alt="sample" />
        <img src="/examples/sample2.png" alt="sample" />
        <img src="/examples/sample3.png" alt="sample" />
        <img src="/examples/sample4.png" alt="sample" />
      </section>
    </main>
  )
}
