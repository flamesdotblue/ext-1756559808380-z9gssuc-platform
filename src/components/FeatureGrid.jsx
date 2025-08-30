import React from 'react';
import { BookOpen, Heart, Shield, Plug } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: BookOpen,
    title: 'Scholarly Rigor',
    body: 'Every answer cites the originating course materials. Source-linked, version-aware, and reviewable by faculty.',
    accent: 'from-rose-500/15 to-rose-500/5',
  },
  {
    icon: Heart,
    title: 'Empathetic Technology',
    body: 'Reduce teacher burnout with drafting, feedback, and accessibility tools that respect workload and voice.',
    accent: 'from-emerald-500/15 to-emerald-500/5',
  },
  {
    icon: Plug,
    title: 'Seamless Integration',
    body: 'Deploy inside your LMS. Works with Canvas, Google Classroom, and LTI 1.3 so adoption is frictionless.',
    accent: 'from-sky-500/15 to-sky-500/5',
  },
  {
    icon: Shield,
    title: 'Privacy & Security',
    body: 'FERPA-aligned by design. Fine-grained permissions, audit trails, and institution-first data governance.',
    accent: 'from-slate-600/15 to-slate-600/5',
  },
];

export default function FeatureGrid() {
  return (
    <section id="learn-more" className="relative py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Designed for trust and impact</h2>
          <p className="mt-3 text-slate-600">A clean, modern layer that connects institutional knowledge to the everyday work of teaching and learning.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${f.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative z-10">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{f.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div id="get-started" className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-rose-600 px-5 py-3 text-white shadow-sm transition hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-600/30"
          >
            Request institutional access
          </a>
          <span className="text-sm text-slate-500">We deploy with your existing identity and LMS.</span>
        </div>
      </div>
    </section>
  );
}
