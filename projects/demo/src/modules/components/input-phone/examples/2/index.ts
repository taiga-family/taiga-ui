import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-phone-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiInputPhoneExample2 {
    testForm = new FormGroup({
        testValue: new FormControl('', Validators.minLength(12)),
    });
}
