import Spline from '@splinetool/react-spline'
import { ArrowRight, BadgeCheck } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(168,85,247,0.25),rgba(37,99,235,0.18)_40%,rgba(251,146,60,0.18)_70%,transparent_80%)]" />

      {/* Spline scene */}
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28 md:pb-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <BadgeCheck className="h-3.5 w-3.5 text-fuchsia-300" />
              <span>AI Communication Intelligence • Dev & Consulting</span>
            </div>

            <h2 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-white drop-shadow-[0_0_35px_rgba(99,102,241,0.25)]">
              Ship smarter conversations and resilient software
            </h2>
            <p className="mt-5 text-base md:text-lg text-slate-200/80 max-w-xl">
              We design voice-first, multi-channel experiences powered by intelligence — then engineer the platforms that bring them to life.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(168,85,247,0.6)]">
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 transition">
                See our work
              </button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-slate-300/70">
              <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.8)]" /><span>24/7 support</span></div>
              <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-violet-400" /><span>Enterprise ready</span></div>
              <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-cyan-400" /><span>ISO compliant</span></div>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px] lg:h-[620px]">
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 bg-slate-900/40 backdrop-blur-xl overflow-hidden">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              {/* subtle gradient overlay that doesn't block interaction */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/30" />
            </div>
            <div className="absolute -inset-x-10 -bottom-10 h-40 blur-3xl opacity-60 bg-[radial-gradient(50%_60%_at_50%_100%,rgba(168,85,247,0.35),rgba(56,189,248,0.25),transparent)]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
