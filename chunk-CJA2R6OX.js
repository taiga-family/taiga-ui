import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInRange} from '@taiga-ui/cdk';
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
        value: new FormControl(13),
        fromInclude: new FormControl(5),
        toExclude: new FormControl(42),
    });

    protected get ranged(): boolean {
        const {value, fromInclude, toExclude} = this.parametersForm.value;

        return tuiInRange(value ?? 13, fromInclude ?? 5, toExclude ?? 42);
    }
}
`;export{t as default};
