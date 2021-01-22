import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-phone-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiInputPhoneExample2 {
    readonly control = new FormControl('', Validators.minLength(12));
}
