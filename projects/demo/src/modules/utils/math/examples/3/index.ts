import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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
    protected parametersForm = new FormGroup({
        value: new FormControl(0),
        min: new FormControl(5),
        max: new FormControl(42),
    });

    protected get normalized(): number {
        const {value, min, max} = this.parametersForm.value;

        return tuiNormalizeToIntNumber(value ?? 0, min ?? 5, max ?? 42);
    }
}
