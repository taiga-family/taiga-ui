/**
 * @deprecated: use {@link tuiHsvToRgb} instead
 * https://stackoverflow.com/a/54024653/2706426
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function hsvToRgb(h: number, s: number, v: number): [number, number, number] {
    return [hsvToColor(h, s, v, 5), hsvToColor(h, s, v, 3), hsvToColor(h, s, v, 1)];
}

export const tuiHsvToRgb = hsvToRgb;

function hsvToColor(h: number, s: number, v: number, n: number): number {
    const k = (n + h / 60) % 6;

    return Math.round(v - v * s * Math.max(Math.min(k, 4 - k, 1), 0));
}
