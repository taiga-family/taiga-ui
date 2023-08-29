import {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {tuiGetMaxAllowedPhoneLength} from '@taiga-ui/kit';

describe(`tuiGetMaxAllowedPhoneLength`, () => {
    let fn: (isoCode: TuiCountryIsoCode) => number;

    beforeEach(() => {
        fn = (isoCode: TuiCountryIsoCode) =>
            tuiGetMaxAllowedPhoneLength(
                {
                    [TuiCountryIsoCode.AU]: `+61 #### ####`,
                    [TuiCountryIsoCode.GB]: `+44 #### ######`,
                    [TuiCountryIsoCode.US]: `+1 (###) ###-####`,
                } as Record<TuiCountryIsoCode, string>,
                isoCode,
            );
    });

    it(`should return max allowed phone length for US iso code`, () => {
        const transformed = fn(TuiCountryIsoCode.US);

        expect(transformed).toEqual(12);
    });

    it(`should return max allowed phone length for GB iso code`, () => {
        const transformed = fn(TuiCountryIsoCode.GB);

        expect(transformed).toEqual(13);
    });

    it(`should return max allowed phone length for AU iso code`, () => {
        const transformed = fn(TuiCountryIsoCode.AU);

        expect(transformed).toEqual(11);
    });
});
