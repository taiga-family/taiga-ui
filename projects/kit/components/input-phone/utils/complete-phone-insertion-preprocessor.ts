import {type MaskitoPreprocessor} from '@maskito/core';

const countDigits = (value: string): number => value.replaceAll(/[^#\d]+/g, '').length;

/**
 * `InputPhone` component sets country code as non-removable prefix.
 * This prefix appears on focus and cannot be erased.
 * But users sometimes can copy complete phone number (from any different source)
 * and try to insert the whole string inside our `InputPhone` textfield.
 * This preprocessor helps to avoid country prefix duplication on paste/drop/autofill events.
 */
export function tuiCreateCompletePhoneInsertionPreprocessor(
    countryCode: string,
    nationalPartTemplate: string,
): MaskitoPreprocessor {
    const completePhoneLength = countDigits(`${countryCode}${nationalPartTemplate}`);

    const trimCountryPrefix = (value: string): string => {
        const trimmed = value.replace(
            new RegExp(String.raw`^(\+?\s*${countryCode.replace('+', '')}?)\s?`),
            '',
        );

        return countryCode === '+7' &&
            countDigits(trimmed) > countDigits(nationalPartTemplate)
            ? trimmed.replace(/^8\s?/, '')
            : trimmed;
    };

    return ({elementState, data}) => {
        const {value, selection} = elementState;

        return {
            elementState: {
                selection,
                value:
                    /**
                     * The only possible case when `value` includes digits more
                     * than mask expression allows – browser autofill.
                     * It means that we are inside `input`-event
                     * and mask are ready to reject "extra" characters.
                     * We should cut leading country prefix to save trailing characters!
                     */
                    countDigits(value) > completePhoneLength
                        ? trimCountryPrefix(value)
                        : value,
            },
            data:
                countDigits(data) >= completePhoneLength || data.startsWith(countryCode)
                    ? /**
                       * User tries to insert/drop the complete phone number (with country prefix).
                       * We should drop already existing non-removable prefix.
                       */
                      trimCountryPrefix(data)
                    : data,
        };
    };
}
