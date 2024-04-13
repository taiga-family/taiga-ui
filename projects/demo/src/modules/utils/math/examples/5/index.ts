import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {tuiClamp} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-math-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiMathExample5 {
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
