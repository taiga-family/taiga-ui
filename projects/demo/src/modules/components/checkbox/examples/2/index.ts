import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-checkbox-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiCheckboxExample2 {
    testForm = new FormGroup({
        testValue1: new FormControl(true),
        testValue2: new FormControl(false),
        testValue3: new FormControl({value: true, disabled: true}),
        testValue4: new FormControl({value: false, disabled: true}),
    });
}
