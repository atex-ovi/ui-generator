'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function TextShadowGenerator() {
  const [offsetX, setOffsetX] = useState(2);
  const [offsetY, setOffsetY] = useState(2);
  const [blur, setBlur] = useState(4);
  const [color, setColor] = useState('#000000');
  const [opacity, setOpacity] = useState(0.5);
  const [copied, setCopied] = useState(false);

  const shadowValue = `${offsetX}px ${offsetY}px ${blur}px ${color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
  const fullCss = `text-shadow: ${shadowValue};`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#282a36] rounded-2xl p-6 border border-[#44475a]">
      <h2 className="text-2xl font-bold text-[#bd93f9] mb-4">Text Shadow Generator</h2>
      
      <div className="mb-6 p-8 bg-[#191a21] rounded-xl flex justify-center">
        <div 
          className="w-64 h-32 flex items-center justify-center text-center p-4 rounded-lg bg-[#282a36]"
        >
          <span 
            className="text-2xl font-bold text-[#f8f8f2]"
            style={{ textShadow: shadowValue }}
          >
            Text Shadow Effect
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-[#f8f8f2] block mb-2">Offset X: {offsetX}px</label>
          <input type="range" min="-20" max="20" value={offsetX} onChange={(e) => setOffsetX(Number(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="text-sm text-[#f8f8f2] block mb-2">Offset Y: {offsetY}px</label>
          <input type="range" min="-20" max="20" value={offsetY} onChange={(e) => setOffsetY(Number(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="text-sm text-[#f8f8f2] block mb-2">Blur: {blur}px</label>
          <input type="range" min="0" max="20" value={blur} onChange={(e) => setBlur(Number(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="text-sm text-[#f8f8f2] block mb-2">Color</label>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-full h-10 rounded cursor-pointer" />
        </div>
        <div>
          <label className="text-sm text-[#f8f8f2] block mb-2">Opacity: {opacity}</label>
          <input type="range" min="0" max="1" step="0.01" value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="w-full" />
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
