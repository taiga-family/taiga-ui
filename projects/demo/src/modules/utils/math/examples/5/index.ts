import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiClamp} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-math-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiMathExample5 {
    parametersForm = new UntypedFormGroup({
        value: new UntypedFormControl(0),
        min: new UntypedFormControl(5),
        max: new UntypedFormControl(42),
    });

    get clamped(): number {
        const {value, min, max} = this.parametersForm.value;

        return tuiClamp(value ?? 0, min ?? 5, max ?? 42);
    }
}
