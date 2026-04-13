export interface BoxShadowProps {
  offsetX: number;
  offsetY: number;
  blur: number;
  spread: number;
  color: string;
  opacity: number;
  inset: boolean;
}

export interface GlassmorphismProps {
  blur: number;
  opacity: number;
  bgColor: string;
  borderOpacity: number;
}

export const generateBoxShadow = (props: BoxShadowProps): string => {
  const { offsetX, offsetY, blur, spread, color, opacity, inset } = props;
  const rgbaColor = color.startsWith('#') 
    ? hexToRgba(color, opacity) 
    : color;
  const insetValue = inset ? 'inset ' : '';
  return `${insetValue}${offsetX}px ${offsetY}px ${blur}px ${spread}px ${rgbaColor}`;
};

export const generateGlassmorphism = (props: GlassmorphismProps): string => {
  const { blur, opacity, bgColor, borderOpacity } = props;
  return `
    background: ${bgColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')};
    backdrop-filter: blur(${blur}px);
    border: 1px solid rgba(255, 255, 255, ${borderOpacity});
    border-radius: 16px;
  `;
};

const hexToRgba = (hex: string, opacity: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
