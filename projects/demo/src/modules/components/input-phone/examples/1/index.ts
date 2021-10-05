import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-phone-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiInputPhoneExample1 {
    testForm = new FormGroup({
        testValue: new FormControl('+77777777777', Validators.required),
    });

    setValue() {
        this.testForm.get('testValue')!.setValue('+79926775676');
    }
}
