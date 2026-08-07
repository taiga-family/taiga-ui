import {tuiStringifyCurrency} from '@taiga-ui/addon-commerce/utils';

describe('tuiStringifyCurrency', () => {
    it.each([
        [null, ''],
        ['USD', 'USD'],
        ['EUR', 'EUR'],
        [840, '840'],
        [36, '036'],
        [5, '005'],
        [0, '000'],
    ])('converts %p to %p', (currency, expected) => {
        expect(tuiStringifyCurrency(currency)).toBe(expected);
    });
});
