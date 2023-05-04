import {TestBed} from '@angular/core/testing';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TuiExtractCountryCodePipe, TuiIsoToCountryCodePipe} from '@taiga-ui/kit';

describe(`TuiExtractCountryCodePipe`, () => {
    let pipe: TuiExtractCountryCodePipe;

    const testCases: Array<{
        input: string;
        countries: TuiCountryIsoCode[];
        expected: TuiCountryIsoCode | undefined;
    }> = [
        {
            input: `79123456789`,
            countries: [TuiCountryIsoCode.US, TuiCountryIsoCode.RU, TuiCountryIsoCode.UA],
            expected: TuiCountryIsoCode.RU,
        },
        {
            input: `12024561111`,
            countries: [TuiCountryIsoCode.US, TuiCountryIsoCode.RU, TuiCountryIsoCode.UA],
            expected: TuiCountryIsoCode.US,
        },
        {
            input: `380442228888`,
            countries: [TuiCountryIsoCode.US, TuiCountryIsoCode.RU, TuiCountryIsoCode.UA],
            expected: TuiCountryIsoCode.UA,
        },
        {
            input: `0123456789`,
            countries: [TuiCountryIsoCode.DE],
            expected: undefined,
        },

        // RU or KZ phones cases

        {
            input: `79123456789`,
            countries: [TuiCountryIsoCode.KZ],
            expected: undefined,
        },
        {
            input: `76861234568`,
            countries: [TuiCountryIsoCode.RU],
            expected: undefined,
        },

        {
            input: `79123456789`,
            countries: [TuiCountryIsoCode.RU, TuiCountryIsoCode.KZ],
            expected: TuiCountryIsoCode.RU,
        },
        {
            input: `79123456789`,
            countries: [TuiCountryIsoCode.KZ, TuiCountryIsoCode.RU],
            expected: TuiCountryIsoCode.RU,
        },
        {
            input: `76861234568`,
            countries: [TuiCountryIsoCode.KZ, TuiCountryIsoCode.RU],
            expected: TuiCountryIsoCode.KZ,
        },
        {
            input: `76861234568`,
            countries: [TuiCountryIsoCode.RU, TuiCountryIsoCode.KZ],
            expected: TuiCountryIsoCode.KZ,
        },
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TuiIsoToCountryCodePipe, TuiExtractCountryCodePipe],
        });

        pipe = TestBed.inject(TuiExtractCountryCodePipe);
    });

    testCases.forEach(({input, countries, expected}) => {
        it(`should return expected result for input: "${input}" and countries: ${countries}`, () => {
            expect(pipe.transform(input, countries)).toEqual(expected);
        });
    });
});
