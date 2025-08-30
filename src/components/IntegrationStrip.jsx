import React from 'react';

export default function IntegrationStrip() {
  const items = ['Canvas', 'Google Classroom', 'Microsoft Teams', 'Zoom', 'LTI 1.3'];
  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50/60 py-8">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-slate-600">Works where you teach</p>
          <div className="flex flex-wrap items-center gap-3">
            {items.map((label) => (
              <span
                key={label}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
