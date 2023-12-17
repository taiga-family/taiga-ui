import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-phone-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputPhoneExample1 {
    testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl('+77777777777', Validators.required),
    });

    setValue(): void {
        this.testForm.get('testValue')!.setValue('+79926775676');
    }
}
