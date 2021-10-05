import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-password-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiInputPasswordExample1 {
    testForm = new FormGroup({
        testValue: new FormControl('password', Validators.required),
    });
}
