import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {quantize} from '@taiga-ui/cdk';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-math-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiMathExample4 {
    parametersForm = new FormGroup({
        value: new FormControl(3),
        quantum: new FormControl(2),
    });

    get quantized(): number {
        const {value, quantum} = this.parametersForm.value;

        return quantize(value, quantum);
    }
}
