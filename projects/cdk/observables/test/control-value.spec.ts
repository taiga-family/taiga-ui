import {fakeAsync} from '@angular/core/testing';
import {AbstractControl, FormControl} from '@angular/forms';
import {tuiControlValue} from '@taiga-ui/cdk';
import {tuiSwitchNgDevMode} from '@taiga-ui/testing';
import {skip} from 'rxjs/operators';

describe(`tuiControlValue`, () => {
    it(`takes control and starts with its value`, fakeAsync(() => {
        let actual = ``;
        const control = new FormControl(`hello`);

        tuiControlValue<string>(control).subscribe(value => {
            actual = value;
        });

        expect(actual).toEqual(`hello`);
    }));

    it(`takes control and emits its values`, fakeAsync(() => {
        let actual = ``;
        const control = new FormControl(`hello`);

        tuiControlValue<string>(control)
            .pipe(skip(1))
            .subscribe(value => {
                actual = value;
            });

        control.setValue(`test`);

        expect(actual).toBe(`test`);
    }));

    describe(`dev mode`, () => {
        beforeEach(() => tuiSwitchNgDevMode(true));

        it(`throws an error if there is no valueChanges`, fakeAsync(() => {
            let actual = ``;

            tuiControlValue({} as AbstractControl).subscribe({
                next: () => {},
                error: (err: unknown) => {
                    actual = (err as Error).message;
                },
            });

            expect(actual).toBe(`Control does not have valueChanges`);
        }));

        afterEach(() => tuiSwitchNgDevMode(false));
    });

    describe(`production mode`, () => {
        it(`throws an error if there is no valueChanges`, fakeAsync(() => {
            let actual = ``;

            tuiControlValue({} as AbstractControl).subscribe({
                next: () => {},
                error: (err: unknown) => {
                    actual = (err as Error).message;
                },
            });

            expect(actual).toBe(``);
        }));
    });
});
