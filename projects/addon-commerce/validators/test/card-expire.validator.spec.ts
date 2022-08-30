import {FormControl} from '@angular/forms';
import {TuiCard, tuiCardExpireValidator} from '@taiga-ui/addon-commerce';

describe(`tuiCardExpireValidator`, () => {
    let control: FormControl | null = null;
    const nextYear: string = (new Date().getFullYear() + 1).toString().slice(-2);

    beforeEach(() => {
        const stub: TuiCard = {card: ``, expire: ``, cvc: ``};

        control = new FormControl(stub, tuiCardExpireValidator);
    });

    it(`is should be expired card for "10/12"`, () => {
        control?.setValue({card: `4111 1111 1111 1111`, expire: `10/12`, cvc: ``});
        control?.updateValueAndValidity();

        expect(control?.valid).toBe(false);
    });

    it(`is should be not expired card for "10/${nextYear}"`, () => {
        control?.setValue({
            card: `4111 1111 1111 1111`,
            expire: `10/${nextYear}`,
            cvc: ``,
        });
        control?.updateValueAndValidity();

        expect(control?.valid).toBe(true);
    });
});
