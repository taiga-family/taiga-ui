import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-checkbox-block-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiCheckboxBlockExample1 {
    testForm = new FormGroup({
        testValue1: new FormControl(false),
        testValue2: new FormControl(false),
        testValue3: new FormControl(false),
    });
}
