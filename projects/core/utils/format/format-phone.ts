/**
 * Formats a string with the phone format +7XXXXXXXXXXXX or XXXXXXXXXXXX,
 * adding parentheses and hyphens.
 *
 * @param value the input string
 * @param countryCode a country code
 * @param phoneMask a phone number mask
 * @return the formatted phone string of the form +7 XXX XXX-XX-XX
 */
export function formatPhone(
    value: string,
    countryCode: string,
    phoneMask: string,
): string {
    if (!value) {
        return '';
    }

    let result = countryCode;

    if (!value.startsWith(countryCode)) {
        value = countryCode + value.replace('+', '');
    }

    const splitPhoneMask = phoneMask.split('');
    const splitValue = value.slice(countryCode.length).split('');

    result += ' ';

    if (splitValue.length === 0) {
        return result;
    }

    for (let i = 0; i < splitPhoneMask.length; i++) {
        if (splitValue.length === 0) {
            break;
        }

        if (splitPhoneMask[i] === '#') {
            result += splitValue[0] || '';
            splitValue.splice(0, 1);
        } else {
            result += splitPhoneMask[i];
        }
    }

    return result;
}
