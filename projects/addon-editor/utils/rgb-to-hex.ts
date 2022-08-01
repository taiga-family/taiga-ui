/**
 * TODO: move another package for reuse between addon-editor and addon-doc
 */
export function tuiRgbToHex(r: number, g: number, b: number): string {
    return [r, g, b].map(x => x.toString(16).padStart(2, `0`)).join(``);
}
