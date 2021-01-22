import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-month-range-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiInputMonthRangeExample2 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(null),
    });
}
