'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function GradientGenerator() {
  const [color1, setColor1] = useState('#bd93f9');
  const [color2, setColor2] = useState('#ff79c6');
  const [angle, setAngle] = useState(135);
  const [copied, setCopied] = useState(false);

  const gradientValue = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
  const fullCss = `background: ${gradientValue};`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#282a36] rounded-2xl p-6 border border-[#44475a]">
      <h2 className="text-2xl font-bold text-[#bd93f9] mb-4">Gradient Generator</h2>
      
      <div className="mb-6 p-8 bg-[#191a21] rounded-xl flex justify-center">
        <div 
          className="w-48 h-48 rounded-lg"
          style={{ background: gradientValue }}
        />
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-[#f8f8f2] block mb-2">Color 1</label>
          <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="w-full h-10 rounded cursor-pointer" />
        </div>
        <div>
          <label className="text-sm text-[#f8f8f2] block mb-2">Color 2</label>
          <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="w-full h-10 rounded cursor-pointer" />
        </div>
        <div>
          <label className="text-sm text-[#f8f8f2] block mb-2">Angle: {angle}°</label>
          <input type="range" min="0" max="360" value={angle} onChange={(e) => setAngle(Number(e.target.value))} className="w-full" />
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
