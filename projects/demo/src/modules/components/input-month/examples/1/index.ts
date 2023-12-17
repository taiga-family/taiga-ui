import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'input-month-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class InputMonthExample1 {
    readonly control = new UntypedFormControl();
}
