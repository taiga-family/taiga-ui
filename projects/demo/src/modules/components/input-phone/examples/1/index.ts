import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-input-phone-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiInputPhoneExample1 {
    testForm = new FormGroup({
        testValue: new FormControl(`+77777777777`, Validators.required),
    });

    setValue(): void {
        this.testForm.get(`testValue`)!.setValue(`+79926775676`);
    }
}
