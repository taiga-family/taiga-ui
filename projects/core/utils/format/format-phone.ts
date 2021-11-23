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

    let newCountryCode = countryCode;
    let newValue = value;

    newCountryCode = newCountryCode.replace(/[()]/g, '');

    if (!newValue.startsWith(countryCode)) {
        newValue = countryCode + newValue.replace('+', '');
    }

    const splitPhoneMask = phoneMask.split('');
    const splitValue = newValue.slice(countryCode.length).split('');

    newCountryCode += ' ';

    if (splitValue.length === 0) {
        return newCountryCode;
    }

    for (let i = 0; i < splitPhoneMask.length; i++) {
        if (splitValue.length === 0) {
            break;
        }

        if (splitPhoneMask[i] === '#') {
            newCountryCode += splitValue[0] || '';
            splitValue.splice(0, 1);
        } else {
            newCountryCode += splitPhoneMask[i];
        }
    }

    return newCountryCode;
}
