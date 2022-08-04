/**
 * https://stackoverflow.com/a/54024653/2706426
 */
export function tuiHsvToRgb(h: number, s: number, v: number): [number, number, number] {
    return [hsvToColor(h, s, v, 5), hsvToColor(h, s, v, 3), hsvToColor(h, s, v, 1)];
}

function hsvToColor(h: number, s: number, v: number, n: number): number {
    const k = (n + h / 60) % 6;

    return Math.round(v - v * s * Math.max(Math.min(k, 4 - k, 1), 0));
}
