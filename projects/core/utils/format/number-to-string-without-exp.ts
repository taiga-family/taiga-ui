/**
 * Convert number to string with replacing exponent part on decimals
 *
 * @param value the number
 * @return string representation of a number
 */
export function tuiNumberToStringWithoutExp(value: number): string {
    const valueAsString = String(value);
    const [numberPart, expPart] = valueAsString.split('e-');

    let valueWithoutExp = valueAsString;

    if (expPart) {
        const [, fractionalPart = ''] = numberPart?.split('.') ?? [];
        const decimalDigits = Number(expPart) + fractionalPart.length;

        valueWithoutExp = value.toFixed(decimalDigits);
    }

    return valueWithoutExp;
}
