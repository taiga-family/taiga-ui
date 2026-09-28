import {type MaskitoOptions, maskitoTransform} from '@maskito/core';

import {tuiCreateCompletePhoneInsertionPreprocessor} from '../utils/complete-phone-insertion-preprocessor';
import {tuiCreatePhoneMaskExpression} from '../utils/create-phone-mask-expression';

describe('tuiCreateCompletePhoneInsertionPreprocessor + browser autofill', () => {
    describe('Country prefix === +7', () => {
        const countryCode = '+7';
        const phoneMaskAfterCountryCode = '(###) ###-##-##';

        const maskOptions: MaskitoOptions = {
            mask: tuiCreatePhoneMaskExpression(countryCode, phoneMaskAfterCountryCode),
            preprocessors: [
                tuiCreateCompletePhoneInsertionPreprocessor(
                    countryCode,
                    phoneMaskAfterCountryCode,
                ),
            ],
        };

        const tests = [
            // [`raw value after autofill`, `clean value after mask validation`]
            ['+7+7 900 200 55 77', '+7 (900) 200-55-77'],
            ['+7+7900 200 55 77', '+7 (900) 200-55-77'],
            ['+78 900 200 55 77', '+7 (900) 200-55-77'],
            ['+7+79002005577', '+7 (900) 200-55-77'],
            ['+779002005577', '+7 (900) 200-55-77'],
            ['+789002005577', '+7 (900) 200-55-77'],
            ['+79002005577', '+7 (900) 200-55-77'],
            ['+ 790020055771', '+7 (900) 200-55-77'],
            ['+   790020055771', '+7 (900) 200-55-77'],
            ['+7 800 123-45-67', '+7 (800) 123-45-67'],
        ];

        tests.forEach(([before, after]) => {
            it(`${before} => ${after}`, () => {
                expect(maskitoTransform(before ?? '', maskOptions)).toBe(after);
            });
        });

        describe('Paste/drop of the complete phone number', () => {
            const preprocessor = tuiCreateCompletePhoneInsertionPreprocessor(
                countryCode,
                phoneMaskAfterCountryCode,
            );

            const tests = [
                // [`pasted string`, `data to insert after country prefix trimming`]
                ['+7 900 200-55-77', '900 200-55-77'],
                ['+79002005577', '9002005577'],
                ['8 800 123-45-67', '800 123-45-67'],
                ['+7 800 123-45-67', '800 123-45-67'],
            ] as const;

            tests.forEach(([pasted, after]) => {
                it(`${pasted} => ${after}`, () => {
                    const initialValue = `${countryCode} `;

                    const {data} = preprocessor(
                        {
                            elementState: {
                                value: initialValue,
                                selection: [initialValue.length, initialValue.length],
                            },
                            data: pasted,
                        },
                        'insert',
                    );

                    expect(data).toBe(after);
                });
            });
        });
    });

    describe('Country prefix === +33', () => {
        const countryCode = '+33';
        const phoneMaskAfterCountryCode = '## ## ## ## ##';

        const maskOptions: MaskitoOptions = {
            mask: tuiCreatePhoneMaskExpression(countryCode, phoneMaskAfterCountryCode),
            preprocessors: [
                tuiCreateCompletePhoneInsertionPreprocessor(
                    countryCode,
                    phoneMaskAfterCountryCode,
                ),
            ],
        };

        const tests = [
            // [`raw value after autofill`, `clean value after mask validation`]
            ['+33+33 01 23 45 67 89', '+33 01 23 45 67 89'],
            ['+33+330123456789', '+33 01 23 45 67 89'],
            ['+3333 01 23 45 67 89', '+33 01 23 45 67 89'],
            ['+33330123456789', '+33 01 23 45 67 89'],
            ['+ 333301234567890', '+33 01 23 45 67 89'],
            ['+   333301234567890', '+33 01 23 45 67 89'],
        ];

        tests.forEach(([before, after]) => {
            it(`${before} => ${after}`, () => {
                expect(maskitoTransform(before ?? '', maskOptions)).toBe(after);
            });
        });
    });
});
