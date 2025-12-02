import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white">
      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* HERO */}
        <header className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-sm font-medium text-green-300">
              NEW • AI Gym Thumbnails
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Generate viral <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-white">gym thumbnails</span> in seconds
            </h1>

            <p className="mt-6 text-lg text-zinc-300 max-w-2xl">
              AI-crafted, cinematic, TikTok-ready thumbnails tailored to fitness creators.
              Choose styles, add your hook text, and get high-converting visuals instantly.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/dashboard" className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 px-5 py-3 rounded-full text-black font-semibold shadow-lg">
                Try 5 FREE
              </Link>

              <a href="#pricing" className="inline-flex items-center gap-2 border border-white/10 px-4 py-3 rounded-full text-sm text-zinc-200 hover:bg-white/5">
                View Pricing
              </a>
            </div>

            <div className="mt-6 text-sm text-zinc-400">
              Trusted by creators — <span className="text-zinc-300">no design skills required</span>.
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5">
            {/* Example composite hero image — uses sample images from /public/examples */}
            <div className="bg-gradient-to-tr from-black/50 to-white/2 p-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-44 rounded-lg overflow-hidden">
                  <Image src="/examples/sample1.png" alt="sample 1" fill className="object-cover" />
                </div>
                <div className="relative h-44 rounded-lg overflow-hidden">
                  <Image src="/examples/sample2.png" alt="sample 2" fill className="object-cover" />
                </div>
                <div className="relative h-44 rounded-lg overflow-hidden">
                  <Image src="/examples/sample3.png" alt="sample 3" fill className="object-cover" />
                </div>
                <div className="relative h-44 rounded-lg overflow-hidden">
                  <Image src="/examples/sample4.png" alt="sample 4" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* FEATURES */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature
            title="Photoreal Cinematic Backgrounds"
            desc="SDXL-powered gym scenes with dramatic white lighting, rigs, punch bags and texture."
            icon="🏋️‍♂️"
          />
          <Feature
            title="Silhouettes & Pose Control"
            desc="Control silhouettes & poses for consistent thumbnails that keep viewer focus on the hook."
            icon="🕺"
          />
          <Feature
            title="One-Click Text Styling"
            desc="Server-rendered crisp typography with strokes, glow, and export-ready PNGs sized for TikTok."
            icon="✍️"
          />
        </section>

        {/* WHY IT WORKS */}
        <section className="mt-12 bg-white/3 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold">Designed for Creators, Built for Growth</h3>
            <p className="mt-3 text-zinc-300">
              Thumbnails engineered to increase CTR — A/B test styles, save presets, and scale with subscriptions.
            </p>

            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-300">
              <li>• Export PNGs & Canva-ready links</li>
              <li>• Preset packs for transformations, motivational, gym tutorials</li>
              <li>• Fast render queue & priority for paid users</li>
              <li>• Commercial license included on premium plan</li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <div className="rounded-xl bg-black/40 p-4 text-center">
              <div className="text-sm text-zinc-300">Avg creator CTR uplift</div>
              <div className="text-4xl font-extrabold mt-2 text-green-300">+18%</div>
              <div className="text-xs text-zinc-400 mt-1">based on test campaigns</div>
            </div>
          </div>
        </section>

        {/* EXAMPLES */}
        <section className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Examples — Real outputs</h3>
            <a href="/dashboard" className="text-sm text-green-300 hover:underline">Generate yours →</a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="rounded-xl overflow-hidden bg-zinc-900/60 ring-1 ring-white/5 shadow-lg">
                <div className="relative h-72">
                  <Image src={`/examples/sample${i}.png`} alt={`sample ${i}`} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="font-semibold">NO EXCUSES</div>
                  <div className="text-xs text-zinc-400 mt-1">Dark cinematic • Silhouette • TikTok 9:16</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="mt-14">
          <h3 className="text-2xl font-bold">Plans built for creators</h3>
          <p className="mt-2 text-zinc-300">Start free — upgrade for priority rendering, API access, and unlimited exports.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Free" price="Free" bullets={["5 renders/day", "Watermarked", "Basic styles"]} cta="Get Started" accent="bg-white/5" />
            <Card title="Creator" price="$9/mo" bullets={["30 renders/day", "No watermark", "All styles", "Canva exports"]} cta="Start Creator" accent="bg-gradient-to-r from-green-500 to-green-400 text-black" />
            <Card title="Pro" price="$29/mo" bullets={["Unlimited renders", "Priority queue", "API access", "Commercial license"]} cta="Get Pro" accent="bg-gradient-to-r from-white/10 to-white/6" />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t border-white/5 pt-8 pb-12 text-sm text-zinc-400">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 max-w-6xl mx-auto">
            <div>
              <div className="text-xl font-bold text-white">GymThumbs AI</div>
              <div className="mt-2 max-w-md">
                AI thumbnails for fitness creators. Fast. Cinematic. Click-driving.
              </div>
            </div>

            <div className="flex gap-6">
              <div>
                <div className="font-medium text-white">Product</div>
                <ul className="mt-2 space-y-1">
                  <li><a className="hover:underline text-zinc-300" href="/dashboard">Generator</a></li>
                  <li><a className="hover:underline text-zinc-300" href="#pricing">Pricing</a></li>
                </ul>
              </div>

              <div>
                <div className="font-medium text-white">Company</div>
                <ul className="mt-2 space-y-1">
                  <li><a className="hover:underline text-zinc-300" href="#">Terms</a></li>
                  <li><a className="hover:underline text-zinc-300" href="#">Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-zinc-500">© {new Date().getFullYear()} GymThumbs AI — Built by you.</div>
        </footer>

      </div>
    </main>
  );
}

/* Small helper components below — keep inside the same file for simplicity */

function Feature({ title, desc, icon }) {
  return (
    <div className="rounded-xl bg-white/3 p-6 shadow-md">
      <div className="text-2xl">{icon}</div>
      <div className="mt-3 font-semibold">{title}</div>
      <div className="mt-2 text-sm text-zinc-300">{desc}</div>
    </div>
  );
}

function Card({ title, price, bullets = [], cta, accent }) {
  return (
    <div className={`rounded-2xl p-6 ${accent} ring-1 ring-white/5 shadow-md`}>
      <div className="flex items-baseline justify-between">
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-2xl font-extrabold">{price}</div>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-zinc-300">
        {bullets.map((b, i) => <li key={i}>• {b}</li>)}
      </ul>

      <div className="mt-6">
        <button className="w-full rounded-full px-4 py-3 bg-white/5 hover:bg-white/10">{cta}</button>
      </div>
    </div>
  );
}
