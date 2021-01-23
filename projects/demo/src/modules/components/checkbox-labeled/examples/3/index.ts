import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-checkbox-labeled-example-3',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiCheckboxLabeledExample3 {
    testForm = new FormGroup({
        testValue1: new FormControl(true),
        testValue2: new FormControl(false),
        testValue3: new FormControl(false),
    });
}
