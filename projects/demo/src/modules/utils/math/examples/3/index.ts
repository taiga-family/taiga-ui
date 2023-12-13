import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiNormalizeToIntNumber} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-math-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiMathExample3 {
    parametersForm = new UntypedFormGroup({
        value: new UntypedFormControl(0),
        min: new UntypedFormControl(5),
        max: new UntypedFormControl(42),
    });

    get normalized(): number {
        const {value, min, max} = this.parametersForm.value;

        return tuiNormalizeToIntNumber(value ?? 0, min ?? 5, max ?? 42);
    }
}
