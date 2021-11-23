import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {inRange} from '@taiga-ui/cdk';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-math-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiMathExample2 {
    parametersForm = new FormGroup({
        value: new FormControl(13),
        fromInclude: new FormControl(5),
        toExclude: new FormControl(42),
    });

    get ranged(): boolean {
        const {value, fromInclude, toExclude} = this.parametersForm.value;

        return inRange(value, fromInclude, toExclude);
    }
}
