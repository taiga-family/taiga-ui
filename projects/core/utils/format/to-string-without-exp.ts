/**
 * Convert number to string removing exponent for small values (when precision > 6)
 *
 * @param value the number
 * @return the string presentation of value without e
 */

export function toStringWithoutExponent(value: number) {
    const valueAsString = value.toString();
    const [numberPart, expPart] = valueAsString.split('e-');

    if (expPart) {
        const fractionalPartLength = numberPart.includes('.')
            ? numberPart.split('.')[1].length
            : 0;
        const decimals = +expPart + fractionalPartLength;

        return value.toFixed(decimals);
    }

    return valueAsString;
}
