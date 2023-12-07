import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiCeil, tuiFloor, tuiRound} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-math-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiMathExample1 {
    parametersForm = new UntypedFormGroup({
        value: new UntypedFormControl(1.005),
        precision: new UntypedFormControl(2),
    });

    get rounded(): number {
        const {value, precision} = this.parametersForm.value;

        return tuiRound(value ?? 1.005, precision ?? 2);
    }

    get floored(): number {
        const {value, precision} = this.parametersForm.value;

        return tuiFloor(value ?? 1.005, precision ?? 2);
    }

    get ceiled(): number {
        const {value, precision} = this.parametersForm.value;

        return tuiCeil(value ?? 1.005, precision ?? 2);
    }
}
