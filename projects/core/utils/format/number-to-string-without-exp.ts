/**
 * @deprecated: use {@link tuiNumberToStringWithoutExp} instead
 * Convert number to string with replacing exponent part on decimals
 *
 * @param value the number
 * @return string representation of a number
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function numberToStringWithoutExp(value: number): string {
    const valueAsString = String(value);
    const [numberPart, expPart] = valueAsString.split('e-');

    let valueWithoutExp = valueAsString;

    if (expPart) {
        const [, fractionalPart] = numberPart.split('.');
        const decimalDigits = Number(expPart) + (fractionalPart?.length || 0);

        valueWithoutExp = value.toFixed(decimalDigits);
    }

    return valueWithoutExp;
}

export const tuiNumberToStringWithoutExp = numberToStringWithoutExp;
