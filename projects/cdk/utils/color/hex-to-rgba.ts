export function tuiHexToRGBA(hex: string, alpha?: number): string {
    const [r, g, b, a] = tuiParseHex(hex, alpha);

    return a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
}

export function tuiIsValidHex(hex: string): boolean {
    // eslint-disable-next-line unicorn/no-unsafe-regex
    return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);
}

const getChunksFromString = (hex: string, chunkSize: number): RegExpMatchArray | null =>
    hex.match(new RegExp(`.{${chunkSize}}`, `g`));

const convertHexUnitTo256 = (hexStr: string): number =>
    parseInt(hexStr.repeat(2 / hexStr.length), 16);

const getAlphaFloat = (a: number, alpha?: number): number => {
    if (typeof a !== `undefined`) {
        return Number((a / 255).toFixed(2));
    }

    if (typeof alpha !== `number` || alpha < 0 || alpha > 1) {
        return 1;
    }

    return alpha;
};

export function tuiParseHex(
    hex: string,
    alpha?: number,
): [number, number, number, number] {
    if (!tuiIsValidHex(hex)) {
        throw new Error(`Invalid HEX`);
    }

    const chunkSize = Math.floor((hex.length - 1) / 3);
    const hexArr = getChunksFromString(hex.slice(1), chunkSize);
    const [r, g, b, a] = hexArr?.map(convertHexUnitTo256) ?? [];
    const floatAlpha = getAlphaFloat(a, alpha);

    return [r, g, b, floatAlpha];
}
