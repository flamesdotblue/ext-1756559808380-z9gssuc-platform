import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import IntegrationStrip from './components/IntegrationStrip';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Hero />
      <IntegrationStrip />
      <FeatureGrid />
      <Footer />
    </div>
  );
}
