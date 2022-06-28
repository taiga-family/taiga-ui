/**
 * @deprecated: use {@link tuiRgbToHex} instead
 * TODO: move another package for reuse between addon-editor and addon-doc
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function rgbToHex(r: number, g: number, b: number): string {
    return [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

export const tuiRgbToHex = rgbToHex;
