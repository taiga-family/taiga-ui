import {FormArray, FormControl, FormGroup} from '@angular/forms';

import {markControlAsTouchedAndValidate} from '../mark-control-as-touched-and-validate';

describe(`markControlAsTouchedAndValidate`, () => {
    it(`FormControl`, () => {
        const control = new FormControl();

        markControlAsTouchedAndValidate(control);

        expect(control.touched).toBe(true);
    });

    it(`FormGroup`, () => {
        const group = new FormGroup({
            control1: new FormControl(),
            control2: new FormControl(),
        });

        markControlAsTouchedAndValidate(group);

        expect(group.get(`control1`)!.touched).toBe(true);
        expect(group.get(`control2`)!.touched).toBe(true);
    });

    it(`With empty form group`, () => {
        const group = new FormGroup({});

        markControlAsTouchedAndValidate(group);

        expect(group.touched).toBe(true);
    });

    it(`FormArray`, () => {
        const array = new FormArray([new FormControl(), new FormControl()]);

        markControlAsTouchedAndValidate(array);

        expect(array.at(0).touched).toBe(true);
        expect(array.at(1).touched).toBe(true);
    });

    it(`With empty form array`, () => {
        const array = new FormArray([]);

        markControlAsTouchedAndValidate(array);

        expect(array.touched).toBe(true);
    });

    it(`With nested form arrays`, () => {
        const form = new FormGroup({
            control1: new FormControl(),
            control2: new FormControl(),
            control3: new FormArray([
                new FormControl(),
                new FormGroup({
                    control4: new FormControl(),
                }),
                new FormArray([new FormControl()]),
            ]),
        });

        markControlAsTouchedAndValidate(form);

        expect(form.get(`control1`)!.touched).toBe(true);
        expect(form.get(`control2`)!.touched).toBe(true);
        expect(form.get(`control3`)!.touched).toBe(true);
        expect((form.get(`control3`) as FormArray).at(0).touched).toBe(true);
        expect((form.get(`control3`) as FormArray).at(1).touched).toBe(true);
        expect((form.get(`control3`) as FormArray).at(2).touched).toBe(true);
        expect(
            ((form.get(`control3`) as FormArray).at(1) as FormGroup).get(`control4`)!
                .touched,
        ).toBe(true);
        expect(
            ((form.get(`control3`) as FormArray).at(2) as FormArray).at(0).touched,
        ).toBe(true);
    });
});
