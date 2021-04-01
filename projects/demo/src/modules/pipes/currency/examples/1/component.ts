import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-currency-example',
    templateUrl: './template.html',
    changeDetection,
    encapsulation,
})
export class TuiCurrencyExample {
    readonly testForm = new FormGroup({
        testValue: new FormControl(100),
    });
}
