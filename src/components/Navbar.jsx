import { Menu, Sparkles } from 'lucide-react'

function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 p-[2px] shadow-[0_0_35px_rgba(168,85,247,0.35)]">
            <div className="h-full w-full rounded-[10px] bg-slate-900/80 backdrop-blur"></div>
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-fuchsia-400" />
              <span className="text-sm uppercase tracking-widest text-fuchsia-300/80">FluentIQ</span>
            </div>
            <h1 className="text-lg font-semibold text-white -mt-0.5">Communication Intelligence</h1>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200/80">
          <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
          <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur hover:bg-white/10 transition">Book a demo</button>
          <button className="inline-flex md:hidden size-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/80">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
