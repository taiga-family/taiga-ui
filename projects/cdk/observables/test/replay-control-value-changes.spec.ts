import {fakeAsync} from '@angular/core/testing';
import type {AbstractControl} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {tuiControlValue} from '@taiga-ui/cdk';
import {skip} from 'rxjs/operators';

describe(`tuiReplayedValueChangesFrom`, () => {
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

    it(`throws an error if there is no valueChanges`, fakeAsync(() => {
        let actual = ``;

        tuiControlValue({} as AbstractControl).subscribe(
            () => {},
            (err: unknown) => {
                actual = (err as Error).message;
            },
        );

        expect(actual).toBe(`Control does not have valueChanges`);
    }));
});
