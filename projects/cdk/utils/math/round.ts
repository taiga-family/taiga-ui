import {tuiAssert} from '@taiga-ui/cdk/classes';

const MAX_PRECISION = 292;

export function round(value: number, precision: number = 0): number {
    return calculate(value, precision, Math.round);
}

export function ceil(value: number, precision: number = 0): number {
    return calculate(value, precision, Math.ceil);
}

export function floor(value: number, precision: number = 0): number {
    return calculate(value, precision, Math.floor);
}

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

    let precisionValue = precision;

    tuiAssert.assert(!isNaN(value), 'Value must be number');
    tuiAssert.assert(Number.isInteger(precisionValue), 'Precision must be integer');

    precisionValue = Math.min(precisionValue, MAX_PRECISION);

    const pair = `${value}e`.split('e');
    const tempValue = func(Number(`${pair[0]}e${Number(pair[1]) + precisionValue}`));
    const processedPair = `${tempValue}e`.split('e');

    return Number(`${processedPair[0]}e${Number(processedPair[1]) - precision}`);
}
