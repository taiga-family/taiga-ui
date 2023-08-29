import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiQuantize} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-math-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiMathExample4 {
    parametersForm = new FormGroup({
        quantum: new FormControl(2),
        value: new FormControl(3),
    });

    get quantized(): number {
        const {quantum, value} = this.parametersForm.value;

        return tuiQuantize(value ?? 3, quantum ?? 2);
    }
}
