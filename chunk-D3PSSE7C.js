import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiClamp} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiInputNumber, TuiTextfield],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected parametersForm = new FormGroup({
        value: new FormControl(0),
        min: new FormControl(5),
        max: new FormControl(42),
    });

    protected get clamped(): number {
        const {value, min, max} = this.parametersForm.value;

        return tuiClamp(value ?? 0, min ?? 5, max ?? 42);
    }
}
`;export{t as default};
