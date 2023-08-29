import {TestBed} from '@angular/core/testing';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TuiIsoToCountryCodePipe, TuiToCountryCodePipe} from '@taiga-ui/kit';

describe(`TuiToCountryCodePipe`, () => {
    let pipe: TuiToCountryCodePipe;

    const testCases: Array<{
        countries: TuiCountryIsoCode[];
        expected: TuiCountryIsoCode | undefined;
        input: string;
    }> = [
        {
            countries: [TuiCountryIsoCode.US, TuiCountryIsoCode.RU, TuiCountryIsoCode.UA],
            expected: TuiCountryIsoCode.RU,
            input: `79123456789`,
        },
        {
            countries: [TuiCountryIsoCode.US, TuiCountryIsoCode.RU, TuiCountryIsoCode.UA],
            expected: TuiCountryIsoCode.US,
            input: `12024561111`,
        },
        {
            countries: [TuiCountryIsoCode.US, TuiCountryIsoCode.RU, TuiCountryIsoCode.UA],
            expected: TuiCountryIsoCode.UA,
            input: `380442228888`,
        },
        {
            countries: [TuiCountryIsoCode.DE],
            expected: undefined,
            input: `0123456789`,
        },

        // RU or KZ phones cases

        {
            countries: [TuiCountryIsoCode.KZ],
            expected: undefined,
            input: `79123456789`,
        },
        {
            countries: [TuiCountryIsoCode.RU],
            expected: undefined,
            input: `76861234568`,
        },

        {
            countries: [TuiCountryIsoCode.RU, TuiCountryIsoCode.KZ],
            expected: TuiCountryIsoCode.RU,
            input: `79123456789`,
        },
        {
            countries: [TuiCountryIsoCode.KZ, TuiCountryIsoCode.RU],
            expected: TuiCountryIsoCode.RU,
            input: `79123456789`,
        },
        {
            countries: [TuiCountryIsoCode.KZ, TuiCountryIsoCode.RU],
            expected: TuiCountryIsoCode.KZ,
            input: `76861234568`,
        },
        {
            countries: [TuiCountryIsoCode.RU, TuiCountryIsoCode.KZ],
            expected: TuiCountryIsoCode.KZ,
            input: `76861234568`,
        },
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TuiIsoToCountryCodePipe, TuiToCountryCodePipe],
        });

        pipe = TestBed.inject(TuiToCountryCodePipe);
    });

    testCases.forEach(({countries, expected, input}) => {
        it(`should return expected result for input: "${input}" and countries: ${countries}`, () => {
            expect(pipe.transform(input, countries)).toEqual(expected);
        });
    });
});
