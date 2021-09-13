import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-group-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.style.less'],
    changeDetection,
    encapsulation,
})
export class TuiGroupExample1 {
    testForm = new FormGroup({
        testValue: new FormControl('', Validators.required),
        testValue2: new FormControl('', Validators.required),
        testValue3: new FormControl('', Validators.required),
    });
}
