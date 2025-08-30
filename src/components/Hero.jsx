import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[86vh] flex items-stretch overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/55 to-white" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/40" />
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-20 sm:py-28 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-rose-500" />
              Scholarly AI for real classrooms
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-slate-900">
              Sillion bridges rigorous research with empathetic technology
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-700">
              A scholarly partner in education. We ground AI in your curriculum so teachers gain time, students gain access, and institutions gain trust.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/30"
              >
                Get a demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#learn-more"
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-3 text-slate-900 ring-1 ring-inset ring-slate-200 backdrop-blur transition hover:bg-white"
              >
                Learn more
              </a>
            </div>

            <div className="mt-10 text-sm text-slate-500 italic" style={{ fontFamily: 'Instrument Sans, Inter, ui-sans-serif, system-ui' }}>
              Built for humans. Verified by source.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
