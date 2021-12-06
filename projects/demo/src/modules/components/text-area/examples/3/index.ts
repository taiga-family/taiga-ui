import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-text-area-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiTextAreaExample3 {
    testForm = new FormGroup({
        testValue1: new FormControl('A field', Validators.required),
    });
}
