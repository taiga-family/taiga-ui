import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiClamp} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-math-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiMathExample5 {
    parametersForm = new FormGroup({
        max: new FormControl(42),
        min: new FormControl(5),
        value: new FormControl(0),
    });

    get clamped(): number {
        const {max, min, value} = this.parametersForm.value;

        return tuiClamp(value ?? 0, min ?? 5, max ?? 42);
    }
}
