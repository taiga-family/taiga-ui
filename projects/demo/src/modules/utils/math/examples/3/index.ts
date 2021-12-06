import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {normalizeToIntNumber} from '@taiga-ui/cdk';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-math-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiMathExample3 {
    parametersForm = new FormGroup({
        value: new FormControl(0),
        min: new FormControl(5),
        max: new FormControl(42),
    });

    get normalized(): number {
        const {value, min, max} = this.parametersForm.value;

        return normalizeToIntNumber(value, min, max);
    }
}
