import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-semibold text-slate-900">Sillion</div>
            <p className="mt-2 text-sm text-slate-600">A scholarly partner in education. Grounded in research, designed for humans.</p>
          </div>
          <div>
            <div className="text-sm font-medium text-slate-900">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#learn-more" className="hover:text-slate-900">Features</a></li>
              <li><a href="#" className="hover:text-slate-900">Security</a></li>
              <li><a href="#" className="hover:text-slate-900">Pricing</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-medium text-slate-900">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">About</a></li>
              <li><a href="#" className="hover:text-slate-900">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Sillion. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-800">Privacy</a>
            <a href="#" className="hover:text-slate-800">Terms</a>
            <a href="#" className="hover:text-slate-800">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
