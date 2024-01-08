import {Pipe, PipeTransform} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Pipe({
    name: 'tuiWrapControl',
})
export class TuiWrapControlPipe implements PipeTransform {
    transform(control: FormControl): FormGroup {
        return new FormGroup({
            control,
        });
    }
}
