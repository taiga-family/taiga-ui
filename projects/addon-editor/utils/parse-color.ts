const DEFAULT: [number, number, number, number] = [0, 0, 0, 1];

/**
 * @deprecated: use {@link tuiParseColor} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function parseColor(color: string): [number, number, number, number] {
    const stripped = color
        .replace(`#`, ``)
        .replace(`rgba(`, ``)
        .replace(`rgb(`, ``)
        .replace(`)`, ``);
    const array = stripped.split(`,`).map(item => parseFloat(item));

    if (array.length === 4) {
        return array as [number, number, number, number];
    }

    if (array.length === 3) {
        return array.concat(1) as [number, number, number, number];
    }

    const matches = stripped.match(new RegExp(`(.{${stripped.length / 3}})`, `g`));

    if (!matches) {
        return DEFAULT;
    }

    const parsed = matches.map(char =>
        parseInt(stripped.length % 2 ? char + char : char, 16),
    );

    return [
        parsed[0] || DEFAULT[0],
        parsed[1] || DEFAULT[1],
        parsed[2] || DEFAULT[2],
        parsed[3] === undefined ? DEFAULT[3] : parsed[3],
    ];
}

export const tuiParseColor = parseColor;
