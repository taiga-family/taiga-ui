import"./chunk-HU6DUUP4.js";var e=`import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiError, tuiValidationErrorsProvider} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [JsonPipe, ReactiveFormsModule, TuiError, TuiInputNumber],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiValidationErrorsProvider({required: 'Required field'})],
})
export default class Example {
    protected readonly control = new FormControl<number | null>(
        null,
        Validators.required,
    );
}
`;export{e as default};
