import {TestBed} from '@angular/core/testing';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TuiIsoToCountryCodePipe, TuiToCountryCodePipe} from '@taiga-ui/legacy';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

describe('TuiToCountryCodePipe', () => {
    let pipe: TuiToCountryCodePipe;

    const testCases: Array<{
        countries: TuiCountryIsoCode[];
        expected: TuiCountryIsoCode | undefined;
        input: string;
    }> = [
        {
            input: '79123456789',
            countries: ['US', 'RU', 'UA'],
            expected: 'RU',
        },
        {
            input: '12024561111',
            countries: ['US', 'RU', 'UA'],
            expected: 'US',
        },
        {
            input: '380442228888',
            countries: ['US', 'RU', 'UA'],
            expected: 'UA',
        },
        {
            input: '0123456789',
            countries: ['DE'],
            expected: undefined,
        },

        // RU or KZ phones cases

        {
            input: '79123456789',
            countries: ['KZ'],
            expected: undefined,
        },
        {
            input: '76861234568',
            countries: ['RU'],
            expected: undefined,
        },

        {
            input: '79123456789',
            countries: ['RU', 'KZ'],
            expected: 'RU',
        },
        {
            input: '79123456789',
            countries: ['KZ', 'RU'],
            expected: 'RU',
        },
        {
            input: '76861234568',
            countries: ['KZ', 'RU'],
            expected: 'KZ',
        },
        {
            input: '76861234568',
            countries: ['RU', 'KZ'],
            expected: 'KZ',
        },
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TuiIsoToCountryCodePipe, TuiToCountryCodePipe, NG_EVENT_PLUGINS],
        });

        pipe = TestBed.inject(TuiToCountryCodePipe);
    });

    testCases.forEach(({input, countries, expected}) => {
        it(`should return expected result for input: "${input}" and countries: ${countries}`, () => {
            expect(pipe.transform(input, countries)).toEqual(expected);
        });
    });
});
