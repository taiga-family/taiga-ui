import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiError, tuiValidationErrorsProvider} from '@taiga-ui/core';
import {TuiInputTime, TuiUnfinishedValidator} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiError,
        TuiForm,
        TuiInputTime,
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
        required: new FormControl(null, Validators.required),
        optional: new FormControl(),
    });
}
`;export{i as default};
