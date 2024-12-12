/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />

const MAX_PRECISION = 292;

/**
 * Rounding number to the set precision
 *
 * @param value
 * @param precision number of digits in a float part
 * @param func rounding function (round, floor, ceil)
 */
function calculate(
    value: number,
    precision: number,
    func: (x: number) => number,
): number {
    if (value === Infinity) {
        return value;
    }

    ngDevMode && console.assert(!Number.isNaN(value), 'Value must be number');
    ngDevMode && console.assert(Number.isInteger(precision), 'Precision must be integer');

    precision = Math.min(precision, MAX_PRECISION);

    const [significand, exponent = ''] = `${value}`.split('e');
    const roundedInt = func(Number(`${significand}e${Number(exponent) + precision}`));

    /**
     * TODO: use BigInt after bumping Safari to 14+
     */
    ngDevMode &&
        console.assert(
            Number.isSafeInteger(roundedInt),
            'Impossible to correctly round the such large number',
        );

    const processedPair = `${roundedInt}e`.split('e');

    return Number(`${processedPair[0]}e${Number(processedPair[1]) - precision}`);
}

export function tuiRound(value: number, precision = 0): number {
    return calculate(value, precision, Math.round);
}

export function tuiCeil(value: number, precision = 0): number {
    return calculate(value, precision, Math.ceil);
}

export function tuiFloor(value: number, precision = 0): number {
    return calculate(value, precision, Math.floor);
}

export function tuiTrunc(value: number, precision = 0): number {
    return calculate(value, precision, Math.trunc);
}

export function tuiIsSafeToRound(value: number, precision = 0): boolean {
    return Number.isSafeInteger(Math.trunc(value * 10 ** precision));
}
