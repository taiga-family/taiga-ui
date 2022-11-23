import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiCeil, tuiFloor, tuiRound} from '@taiga-ui/cdk';

@Component({
    selector: `tui-math-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiMathExample1 {
    parametersForm = new FormGroup({
        value: new FormControl(1.005),
        precision: new FormControl(2),
    });

    get rounded(): number {
        const {value, precision} = this.parametersForm.value;

        return tuiRound(value || 1.005, precision || 2);
    }

    get floored(): number {
        const {value, precision} = this.parametersForm.value;

        return tuiFloor(value || 1.005, precision || 2);
    }

    get ceiled(): number {
        const {value, precision} = this.parametersForm.value;

        return tuiCeil(value || 1.005, precision || 2);
    }
}
