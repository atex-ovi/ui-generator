'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function GlassmorphismGenerator() {
  const [blur, setBlur] = useState(10);
  const [opacity, setOpacity] = useState(0.2);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [borderOpacity, setBorderOpacity] = useState(0.2);
  const [borderRadius, setBorderRadius] = useState(16);
  const [copied, setCopied] = useState(false);

  const bgRgba = `${bgColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
  
  const glassStyle = `background: ${bgRgba};
backdrop-filter: blur(${blur}px);
border: 1px solid rgba(255, 255, 255, ${borderOpacity});
border-radius: ${borderRadius}px;`;

  const fullCss = glassStyle;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#282a36] rounded-2xl p-6 border border-[#44475a]">
      <h2 className="text-2xl font-bold text-[#bd93f9] mb-4">Glassmorphism Generator</h2>
      
      <div className="mb-6 p-8 bg-gradient-to-br from-[#bd93f9]/30 to-[#ff79c6]/30 rounded-xl flex justify-center">
        <div 
          className="w-48 h-48 flex items-center justify-center text-center p-4 transition-all"
          style={{
            background: bgRgba,
            backdropFilter: `blur(${blur}px)`,
            border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
            borderRadius: `${borderRadius}px`
          }}
        >
          <span className="text-[#f8f8f2] text-sm font-semibold">Glassmorphism Effect</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-[#f8f8f2] block mb-2">Blur: {blur}px</label>
          <input type="range" min="0" max="30" value={blur} onChange={(e) => setBlur(Number(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="text-sm text-[#f8f8f2] block mb-2">Opacity: {opacity}</label>
          <input type="range" min="0" max="1" step="0.01" value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="text-sm text-[#f8f8f2] block mb-2">Background Color</label>
          <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-full h-10 rounded cursor-pointer" />
        </div>
        <div>
          <label className="text-sm text-[#f8f8f2] block mb-2">Border Opacity: {borderOpacity}</label>
          <input type="range" min="0" max="1" step="0.01" value={borderOpacity} onChange={(e) => setBorderOpacity(Number(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="text-sm text-[#f8f8f2] block mb-2">Border Radius: {borderRadius}px</label>
          <input type="range" min="0" max="50" value={borderRadius} onChange={(e) => setBorderRadius(Number(e.target.value))} className="w-full" />
        </div>
      </div>

      <div className="mt-6">
        <div className="bg-[#191a21] rounded-lg p-4 overflow-x-auto border border-[#44475a]">
          <pre className="text-sm text-[#50fa7b]" style={{ fontFamily: 'Fira Code, monospace', margin: 0 }}>
            <code>{fullCss}</code>
          </pre>
        </div>
        <button onClick={copyToClipboard} className="mt-3 flex items-center gap-2 px-4 py-2 bg-[#bd93f9] text-[#191a21] rounded-lg font-semibold hover:bg-[#ff79c6] transition-all">
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Copied!' : 'Copy CSS'}
        </button>
      </div>
    </div>
  );
}
