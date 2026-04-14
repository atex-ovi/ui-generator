'use client';

import { useState } from 'react';
import { Box, Square, Layers, Sparkles, Palette, Type } from 'lucide-react';
import BoxShadowGenerator from '../components/generators/BoxShadowGenerator';
import BorderRadiusGenerator from '../components/generators/BorderRadiusGenerator';
import GlassmorphismGenerator from '../components/generators/GlassmorphismGenerator';
import GradientGenerator from '../components/generators/GradientGenerator';
import TextShadowGenerator from '../components/generators/TextShadowGenerator';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'boxshadow' | 'borderradius' | 'glassmorphism' | 'gradient' | 'textshadow'>('boxshadow');

  const tabs = [
    { id: 'boxshadow', label: 'Box Shadow', icon: Box },
    { id: 'borderradius', label: 'Border Radius', icon: Square },
    { id: 'glassmorphism', label: 'Glassmorphism', icon: Layers },
    { id: 'gradient', label: 'Gradient', icon: Palette },
    { id: 'textshadow', label: 'Text Shadow', icon: Type },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#191a21] to-[#282a36]">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-16 h-16 text-[#bd93f9]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#bd93f9] to-[#ff79c6] bg-clip-text text-transparent mb-3">
            UI Generator
          </h1>
          <p className="text-[#f8f8f2] text-lg opacity-80">
            Generate beautiful CSS effects in real-time
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-4xl mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all text-sm ${
                  activeTab === tab.id
                    ? 'bg-[#bd93f9] text-[#191a21]'
                    : 'bg-[#44475a] text-[#f8f8f2] hover:bg-[#6272a4]'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          {activeTab === 'boxshadow' && <BoxShadowGenerator />}
          {activeTab === 'borderradius' && <BorderRadiusGenerator />}
          {activeTab === 'glassmorphism' && <GlassmorphismGenerator />}
          {activeTab === 'gradient' && <GradientGenerator />}
          {activeTab === 'textshadow' && <TextShadowGenerator />}
        </div>
      </div>
    </main>
  );
}
