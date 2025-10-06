import {TestBed} from '@angular/core/testing';

import {TuiIsoToCountryCodePipe} from '../iso-to-country-code.pipe';

describe('TuiIsoToCountryCodePipe', () => {
    let pipe: TuiIsoToCountryCodePipe;

    beforeEach(() => {
        TestBed.configureTestingModule({providers: [TuiIsoToCountryCodePipe]});

        pipe = TestBed.inject(TuiIsoToCountryCodePipe);
    });

    it('should transform US iso code to country code', () => {
        const transformed = pipe.transform('US');

        expect(transformed).toBe('+1');
    });

    it('should transform GB iso code to country code', () => {
        const transformed = pipe.transform('GB');

        expect(transformed).toBe('+44');
    });

    it('should transform AU iso code to country code', () => {
        const transformed = pipe.transform('AU');

        expect(transformed).toBe('+61');
    });
});
