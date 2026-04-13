'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function BorderRadiusGenerator() {
  const [topLeft, setTopLeft] = useState(16);
  const [topRight, setTopRight] = useState(16);
  const [bottomRight, setBottomRight] = useState(16);
  const [bottomLeft, setBottomLeft] = useState(16);
  const [linked, setLinked] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleChange = (corner: string, value: number) => {
    if (linked) {
      setTopLeft(value);
      setTopRight(value);
      setBottomRight(value);
      setBottomLeft(value);
    } else {
      switch(corner) {
        case 'tl': setTopLeft(value); break;
        case 'tr': setTopRight(value); break;
        case 'br': setBottomRight(value); break;
        case 'bl': setBottomLeft(value); break;
      }
    }
  };

  const borderRadiusValue = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;
  const fullCss = `border-radius: ${borderRadiusValue};`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#282a36] rounded-2xl p-6 border border-[#44475a]">
      <h2 className="text-2xl font-bold text-[#bd93f9] mb-4">Border Radius Generator</h2>
      
      <div className="mb-6 p-8 bg-[#191a21] rounded-xl flex justify-center">
        <div 
          className="w-48 h-48 bg-gradient-to-br from-[#bd93f9] to-[#ff79c6]"
          style={{ borderRadius: borderRadiusValue }}
        />
      </div>

      <div className="space-y-4">
        <label className="flex items-center gap-2 text-[#f8f8f2] cursor-pointer mb-4">
          <input type="checkbox" checked={linked} onChange={(e) => setLinked(e.target.checked)} />
          Link All Corners
        </label>

        {linked ? (
          <div>
            <label className="text-sm text-[#f8f8f2] block mb-2">All Corners: {topLeft}px</label>
            <input type="range" min="0" max="100" value={topLeft} onChange={(e) => handleChange('tl', Number(e.target.value))} className="w-full" />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-[#f8f8f2] block mb-2">Top Left: {topLeft}px</label>
              <input type="range" min="0" max="100" value={topLeft} onChange={(e) => setTopLeft(Number(e.target.value))} className="w-full" />
            </div>
            <div>
              <label className="text-sm text-[#f8f8f2] block mb-2">Top Right: {topRight}px</label>
              <input type="range" min="0" max="100" value={topRight} onChange={(e) => setTopRight(Number(e.target.value))} className="w-full" />
            </div>
            <div>
              <label className="text-sm text-[#f8f8f2] block mb-2">Bottom Right: {bottomRight}px</label>
              <input type="range" min="0" max="100" value={bottomRight} onChange={(e) => setBottomRight(Number(e.target.value))} className="w-full" />
            </div>
            <div>
              <label className="text-sm text-[#f8f8f2] block mb-2">Bottom Left: {bottomLeft}px</label>
              <input type="range" min="0" max="100" value={bottomLeft} onChange={(e) => setBottomLeft(Number(e.target.value))} className="w-full" />
            </div>
          </div>
        )}
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
