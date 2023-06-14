import {MaskitoOptions, maskitoTransform} from '@maskito/core';

import {
    tuiCreateCompletePhoneInsertionPreprocessor,
    tuiCreatePhoneMaskExpression,
} from '../utils';

describe(`tuiCreateCompletePhoneInsertionPreprocessor + browser autofill`, () => {
    describe(`Country prefix === +7`, () => {
        const countryCode = `+7`;
        const phoneMaskAfterCountryCode = `(###) ###-##-##`;

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
            [`+7+7 900 200 55 77`, `+7 (900) 200-55-77`],
            [`+7+7900 200 55 77`, `+7 (900) 200-55-77`],
            [`+78 900 200 55 77`, `+7 (900) 200-55-77`],
            [`+7+79002005577`, `+7 (900) 200-55-77`],
            [`+779002005577`, `+7 (900) 200-55-77`],
            [`+789002005577`, `+7 (900) 200-55-77`],
            [`+79002005577`, `+7 (900) 200-55-77`],
        ];

        tests.forEach(([before, after]) => {
            it(`${before} => ${after}`, () => {
                expect(maskitoTransform(before, maskOptions)).toBe(after);
            });
        });
    });

    describe(`Country prefix === +33`, () => {
        const countryCode = `+33`;
        const phoneMaskAfterCountryCode = `## ## ## ## ##`;

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
            [`+33+33 01 23 45 67 89`, `+33 01 23 45 67 89`],
            [`+33+330123456789`, `+33 01 23 45 67 89`],
            [`+3333 01 23 45 67 89`, `+33 01 23 45 67 89`],
            [`+33330123456789`, `+33 01 23 45 67 89`],
        ];

        tests.forEach(([before, after]) => {
            it(`${before} => ${after}`, () => {
                expect(maskitoTransform(before, maskOptions)).toBe(after);
            });
        });
    });
});
