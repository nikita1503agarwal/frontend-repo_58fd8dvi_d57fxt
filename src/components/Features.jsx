import { Brain, MessageSquare, Boxes, Code2 } from 'lucide-react'

function Features() {
  const items = [
    {
      icon: Brain,
      title: 'Communication Intelligence',
      text: 'Context-aware voice, chat, and email understanding fused with real-time decisioning.'
    },
    {
      icon: MessageSquare,
      title: 'Omnichannel Orchestration',
      text: 'Route and resolve across voice, chat, SMS, and social with consistency and speed.'
    },
    {
      icon: Boxes,
      title: 'Platform Integration',
      text: 'Deep integrations with CRMs, contact platforms, and data lakes for measurable outcomes.'
    },
    {
      icon: Code2,
      title: 'Engineering & Consulting',
      text: 'Specialist teams shipping reliable services, data pipelines, and frontends at pace.'
    }
  ]

  return (
    <section id="capabilities" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_0%,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-slate-200/90 backdrop-blur hover:bg-white/[0.06] transition">
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/30 via-violet-500/30 to-cyan-400/30 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/80">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
