import {TestBed} from '@angular/core/testing';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';

import {TuiIsoToCountryCodePipe} from '../iso-to-country-code.pipe';

describe(`TuiIsoToCountryCodePipe`, () => {
    let pipe: TuiIsoToCountryCodePipe;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TuiIsoToCountryCodePipe],
        });

        pipe = TestBed.inject(TuiIsoToCountryCodePipe);
    });

    it(`should transform US iso code to country code`, () => {
        const transformed = pipe.transform(TuiCountryIsoCode.US);

        expect(transformed).toEqual(`+1`);
    });

    it(`should transform GB iso code to country code`, () => {
        const transformed = pipe.transform(TuiCountryIsoCode.GB);

        expect(transformed).toEqual(`+44`);
    });

    it(`should transform AU iso code to country code`, () => {
        const transformed = pipe.transform(TuiCountryIsoCode.AU);

        expect(transformed).toEqual(`+61`);
    });
});
