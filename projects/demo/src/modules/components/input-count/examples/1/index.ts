import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-count-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiInputCountExample1 {
    readonly testForm = new FormGroup({
        testValue1: new FormControl(10, Validators.required),
        testValue2: new FormControl(10, Validators.required),
        testValue3: new FormControl(-10, Validators.required),
    });
}
