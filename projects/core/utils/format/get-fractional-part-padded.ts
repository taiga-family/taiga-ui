import {numberToStringWithoutExp} from './number-to-string-without-exp';

export function getFractionPartPadded(value: number, precision?: number | null): string {
    const [, fractionPartPadded = ''] = numberToStringWithoutExp(value).split('.');

    if (typeof precision === 'number') {
        return fractionPartPadded.substr(0, precision);
    }

    return fractionPartPadded;
}
