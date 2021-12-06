import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-number-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiInputNumberExample1 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(),
    });
}
