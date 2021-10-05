import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {clamp} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-math-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiMathExample5 {
    parametersForm = new FormGroup({
        value: new FormControl(0),
        min: new FormControl(5),
        max: new FormControl(42),
    });

    get clamped(): number {
        const {value, min, max} = this.parametersForm.value;

        return clamp(value, min, max);
    }
}
