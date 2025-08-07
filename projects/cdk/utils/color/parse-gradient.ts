import {tuiParseColor} from './parse-color';

export interface TuiParsedGradient {
    readonly side: TuiGradientDirection;
    readonly stops: ReadonlyArray<{
        readonly color: string;
        readonly position: string;
    }>;
}

export type TuiGradientDirection =
    | 'to bottom left'
    | 'to bottom right'
    | 'to bottom'
    | 'to left'
    | 'to right'
    | 'to top left'
    | 'to top right'
    | 'to top';

//
// TypeScript parser based on Dean Taylor's answer:
// https://stackoverflow.com/a/20238168/2706426
//
// SETUP CODE
const COMMA = String.raw`\s*,\s*`; // Allow space around comma.
const HEX = '#(?:[a-f0-9]{6}|[a-f0-9]{3})'; // 3 or 6 character form
const RGB = String.raw`\(\s*(?:\d{1,3}\s*,\s*){2}\d{1,3}\s*\)`; // "(1, 2, 3)"
const RGBA = String.raw`\(\s*(?:\d{1,3}\s*,\s*){2}\d{1,3}\s*,\s*\d*\.?\d+\)`; // "(1, 2, 3, 4)"
const VALUE = String.raw`(?:[+-]?\d*\.?\d+)(?:%|[a-z]+)?`; // ".9", "-5px", "100%".
const KEYWORD = '[_a-z-][_a-z0-9-]*'; // "red", "transparent", "border-collapse".
const COLOR = [
    '(?:',
    HEX,
    '|',
    '(?:rgb|hsl)',
    RGB,
    '|',
    '(?:rgba|hsla)',
    RGBA,
    '|',
    KEYWORD,
    ')',
];
const REGEXP_ARRAY = [
    String.raw`\s*(`,
    ...COLOR,
    ')',
    String.raw`(?:\s+`,
    '(',
    VALUE,
    '))?',
    '(?:',
    COMMA,
    String.raw`\s*)?`,
];

function getPosition(match: string, stops: number): string {
    const fallback = stops === 1 ? '100%' : `${stops}%`;

    return match?.includes('%') ? match : fallback;
}

export function tuiParseGradient(input: string): TuiParsedGradient {
    const stopsRegexp = new RegExp(REGEXP_ARRAY.join(''), 'gi');
    const stopsString =
        input.startsWith('to') || /^\d/.exec(input)
            ? input.slice(Math.max(0, input.indexOf(',') + 1)).trim()
            : input;

    const side = input.startsWith('to')
        ? (input.split(',')[0] as TuiGradientDirection)
        : 'to bottom';
    let stops: TuiParsedGradient['stops'] = [];

    let matchColorStop = stopsRegexp.exec(stopsString);

    while (matchColorStop !== null) {
        stops = stops.concat({
            color: matchColorStop[1] || '',
            position: getPosition(matchColorStop[2] || '', stops.length),
        });

        matchColorStop = stopsRegexp.exec(stopsString);
    }

    stops = stops.filter(({color}) => color.startsWith('#') || color.startsWith('rgb'));

    return {
        stops,
        side,
    };
}

export function tuiToGradient({stops, side}: TuiParsedGradient): string {
    return `linear-gradient(${side}, ${stops
        .map(
            ({color, position}) => `rgba(${tuiParseColor(color).join(', ')}) ${position}`,
        )
        .join(', ')})`;
}
