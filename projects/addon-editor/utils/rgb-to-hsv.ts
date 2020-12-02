// https://stackoverflow.com/a/54070620/2706426
export function rgbToHsv(r: number, g: number, b: number): [number, number, number] {
    const v = Math.max(r, g, b);
    const n = v - Math.min(r, g, b);
    const h = n && (v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n);

    return [60 * (h < 0 ? h + 6 : h), v && n / v, v];
}
