import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInput} from '@taiga-ui/core';

@Component({
    imports: [ReactiveFormsModule, TuiInput],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected form = new FormGroup({value: new FormControl('Input value')});
}
`;export{t as default};
