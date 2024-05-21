import {CHAR_PLUS} from '@taiga-ui/cdk';

/**
 * Use {@link https://maskito.dev/core-concepts/transformer maskitoTransform} instead!
 * @example
 * import {maskitoTransform} from '@maskito/core';
 *
 * const mask = {
 *     mask: ['+', '1', ' ', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
 * };
 * maskitoTransform('12125552368', mask); // +1 (212) 555-2368
 * ___
 * @example
 * import {maskitoTransform} from '@maskito/core';
 * import {maskitoPhoneOptionsGenerator} from '@maskito/phone';
 * import metadata from 'libphonenumber-js/min/metadata';
 *
 * const options = maskitoPhoneOptionsGenerator({countryIsoCode: 'US', metadata});
 *
 * maskitoTransform('12125552368', mask); // +1 (212) 555-2368
 * ___
 * @deprecated Use {@link https://maskito.dev/core-concepts/transformer maskitoTransform} instead<br/>
 * Formats a string with the phone format +7XXXXXXXXXXXX or XXXXXXXXXXXX,
 * adding parentheses and hyphens.
 *
 * @param value the input string
 * @param countryCode a country code
 * @param phoneMask a phone number mask
 * @return the formatted phone string of the form +7 XXX XXX-XX-XX
 */
export function tuiFormatPhone(
    value: string,
    countryCode: string,
    phoneMask: string,
): string {
    if (!value) {
        return '';
    }

    let result = countryCode;

    countryCode = countryCode.replaceAll(/[()]/g, '');

    if (!value.startsWith(countryCode)) {
        value = countryCode + value.replace(CHAR_PLUS, '');
    }

    const splitPhoneMask = phoneMask.split('');
    const splitValue = value.slice(countryCode.length).split('');

    result += ' ';

    if (splitValue.length === 0) {
        return result;
    }

    for (const mask of splitPhoneMask) {
        if (splitValue.length === 0) {
            break;
        }

        if (mask === '#') {
            result += splitValue[0] || '';
            splitValue.splice(0, 1);
        } else {
            result += mask;
        }
    }

    return result;
}
