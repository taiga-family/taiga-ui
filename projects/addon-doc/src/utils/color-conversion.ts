export function rgbToHex(r: number, g: number, b: number): string {
    return (
        '#' +
        [r, g, b]
            .map(x => {
                const hex = x.toString(16);

                return hex.length === 1 ? '0' + hex : hex;
            })
            .join('')
    );
}

export function hexToRgb(hex: string): [number, number, number] {
    const matches = hex
        .replace('#', '')
        .split('')
        .map((char, _, array) => (array.length === 3 ? char + char : char))
        .join('')
        .match(/.{2}/g);

    return matches
        ? (matches.map(x => Number.parseInt(x, 16)) as [number, number, number])
        : [0, 0, 0];
}
