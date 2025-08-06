/**
 * Create {@link https://maskito.dev/core-concepts/mask-expression pattern mask expression} for phone number
 *
 * @example
 * tuiCreatePhoneMaskExpression('+1', '(###) ###-####');
 */
export function tuiCreatePhoneMaskExpression(
    countryCode: string,
    phoneMaskAfterCountryCode: string,
): Array<RegExp | string> {
    return [
        ...countryCode.split(''),
        ' ',
        ...phoneMaskAfterCountryCode
            .replaceAll(/[^#\- ()]+/g, '')
            .split('')
            .map((item) => (item === '#' ? /\d/ : item)),
    ];
}
