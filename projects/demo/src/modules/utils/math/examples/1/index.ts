import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiCeil, tuiFloor, tuiRound} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-math-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiMathExample1 {
    parametersForm = new FormGroup({
        precision: new FormControl(2),
        value: new FormControl(1.005),
    });

    get rounded(): number {
        const {precision, value} = this.parametersForm.value;

        return tuiRound(value ?? 1.005, precision ?? 2);
    }

    get floored(): number {
        const {precision, value} = this.parametersForm.value;

        return tuiFloor(value ?? 1.005, precision ?? 2);
    }

    get ceiled(): number {
        const {precision, value} = this.parametersForm.value;

        return tuiCeil(value ?? 1.005, precision ?? 2);
    }
}
