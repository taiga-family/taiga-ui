import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'input-month-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class InputMonthExample1 {
    readonly control = new FormControl();
}
