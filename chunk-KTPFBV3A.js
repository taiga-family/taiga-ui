import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    type ValidationErrors,
    type ValidatorFn,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiError, tuiValidationErrorsProvider} from '@taiga-ui/core';
import {TuiInputDateTime, TuiUnfinishedValidator} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

export function minLengthValidator(minLength: number): ValidatorFn {
    return ({value}): ValidationErrors | null =>
        value?.filter(Boolean).length >= minLength ? null : {required: {value}};
}

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiError,
        TuiForm,
        TuiInputDateTime,
        TuiUnfinishedValidator,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiValidationErrorsProvider({
            tuiUnfinished: 'Either fill this or leave blank',
            required: 'This field is required',
        }),
    ],
})
export default class Example {
    protected readonly form = new FormGroup({
        timeRequired: new FormControl(null, minLengthValidator(2)),
        dayRequired: new FormControl(
            null,
            minLengthValidator(1), // The same as \`Validators.required\` (from @angular/forms)
        ),
        optional: new FormControl(),
    });
}
`;export{e as default};
