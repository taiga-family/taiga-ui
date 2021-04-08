import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-currency-example2',
    templateUrl: './template.html',
    changeDetection,
    encapsulation,
})
export class TuiCurrencyExample2 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(100),
    });
}
