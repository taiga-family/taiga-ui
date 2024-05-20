import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {tuiGetMaxAllowedPhoneLength} from '@taiga-ui/kit';

describe('tuiGetMaxAllowedPhoneLength', () => {
    let fn: (isoCode: TuiCountryIsoCode) => number;

    beforeEach(() => {
        fn = (isoCode: TuiCountryIsoCode) =>
            tuiGetMaxAllowedPhoneLength(
                {
                    US: '+1 (###) ###-####',
                    GB: '+44 #### ######',
                    AU: '+61 #### ####',
                } as Record<TuiCountryIsoCode, string>,
                isoCode,
            );
    });

    it('should return max allowed phone length for US iso code', () => {
        const transformed = fn('US');

        expect(transformed).toBe(12);
    });

    it('should return max allowed phone length for GB iso code', () => {
        const transformed = fn('GB');

        expect(transformed).toBe(13);
    });

    it('should return max allowed phone length for AU iso code', () => {
        const transformed = fn('AU');

        expect(transformed).toBe(11);
    });
});
