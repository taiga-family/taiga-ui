import"./chunk-HU6DUUP4.js";var r=`import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiError, TuiInput} from '@taiga-ui/core';

@Component({
    imports: [ReactiveFormsModule, TuiError, TuiInput],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl('', Validators.required);

    constructor() {
        this.control.markAsTouched();
    }
}
`;export{r as default};
