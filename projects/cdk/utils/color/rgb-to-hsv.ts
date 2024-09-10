export function tuiRgbToHsv(r: number, g: number, b: number): [number, number, number] {
    const value = Math.max(r, g, b);
    const brightness = value - Math.min(r, g, b);
    const saturation = value === g ? 2 + (b - r) / brightness : 4 + (r - g) / brightness;
    const hue = brightness && (value === r ? (g - b) / brightness : saturation);

    return [60 * (hue < 0 ? hue + 6 : hue), value && brightness / value, value];
}
