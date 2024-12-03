import {fakeAsync} from '@angular/core/testing';
import {FormControl} from '@angular/forms';
import {tuiControlValue} from '@taiga-ui/cdk';
import {skip} from 'rxjs/operators';

describe('tuiControlValue', () => {
    it('takes control and starts with its value', fakeAsync(() => {
        let actual = '';
        const control = new FormControl('hello');

        tuiControlValue<string>(control).subscribe(value => {
            actual = value;
        });

        expect(actual).toBe('hello');
    }));

    it('takes control and emits its values', fakeAsync(() => {
        let actual = '';
        const control = new FormControl('hello');

        tuiControlValue<string>(control)
            .pipe(skip(1))
            .subscribe(value => {
                actual = value;
            });

        control.setValue('test');

        expect(actual).toBe('test');
    }));
});
