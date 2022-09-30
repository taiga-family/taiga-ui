import {FormControl} from '@angular/forms';
import {TuiCard} from '@taiga-ui/addon-commerce/interfaces';
import {tuiCardNumberValidator} from '@taiga-ui/addon-commerce/validators';

describe(`tuiCardNumberValidator`, () => {
    let control: FormControl | null = null;

    beforeEach(() => {
        const stub: TuiCard = {card: ``, expire: ``, cvc: ``};

        control = new FormControl(stub, tuiCardNumberValidator);
    });

    describe(`invalid cards`, () => {
        it(`card is 1234 1234 1234 1234`, () => {
            control?.setValue({card: `1234 1234 1234 1234`, expire: ``, cvc: ``});
            control?.updateValueAndValidity();
            expect(control?.valid).toBe(false);
        });

        it(`card is 1234 5678 9123 4567`, () => {
            control?.setValue({card: `1234 5678 9123 4567`, expire: ``, cvc: ``});
            control?.updateValueAndValidity();
            expect(control?.valid).toBe(false);
        });

        it(`card is "2345 7823 4095 8723"`, () => {
            control?.setValue({card: `2345 7823 4095 8723`, expire: ``, cvc: ``});
            control?.updateValueAndValidity();
            expect(control?.valid).toBe(false);
        });
    });

    describe(`valid cards`, () => {
        it(`card is 4111 1111 1111 1111`, () => {
            control?.setValue({card: `4111 1111 1111 1111`, expire: ``, cvc: ``});
            control?.updateValueAndValidity();
            expect(control?.valid).toBe(true);
        });

        it(`card is 4000 0000 0000 0333`, () => {
            control?.setValue({card: `4000 0000 0000 0333`, expire: ``, cvc: ``});
            control?.updateValueAndValidity();
            expect(control?.valid).toBe(true);
        });

        it(`card is 5000 0000 0000 0108`, () => {
            control?.setValue({card: `5000 0000 0000 0108`, expire: ``, cvc: ``});
            control?.updateValueAndValidity();
            expect(control?.valid).toBe(true);
        });
    });
});
