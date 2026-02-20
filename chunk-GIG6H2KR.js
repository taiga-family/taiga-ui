import"./chunk-HU6DUUP4.js";var r=`import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiCeil, tuiFloor, tuiRound} from '@taiga-ui/cdk';
import {TuiNumberFormat, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiInputNumber, TuiNumberFormat, TuiTextfield],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected parametersForm = new FormGroup({
        value: new FormControl(1.005),
        precision: new FormControl(2),
    });

    protected get rounded(): number {
        const {value, precision} = this.parametersForm.value;

        return tuiRound(value ?? 1.005, precision ?? 2);
    }

    protected get floored(): number {
        const {value, precision} = this.parametersForm.value;

        return tuiFloor(value ?? 1.005, precision ?? 2);
    }

    protected get ceiled(): number {
        const {value, precision} = this.parametersForm.value;

        return tuiCeil(value ?? 1.005, precision ?? 2);
    }
}
`;export{r as default};
