import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-text-area-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiTextAreaExample1 {
    testForm = new FormGroup({
        testValue1: new FormControl('A field', Validators.required),
        testValue2: new FormControl('This one can be expanded', Validators.required),
    });
}
