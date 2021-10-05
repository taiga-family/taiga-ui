export function rgbToHex(r: number, g: number, b: number): string {
    return [r, g, b]
        .map(x => x.toString(16))
        .map(hex => (hex.length === 1 ? '0' + hex : hex))
        .join('');
}
