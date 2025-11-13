import"./chunk-42JZD6NG.js";var t=`import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputPin} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiInputPin, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl('', Validators.minLength(4));
}
`;export{t as default};
