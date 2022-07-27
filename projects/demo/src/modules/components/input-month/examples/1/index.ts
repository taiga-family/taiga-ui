import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `input-month-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class InputMonthExample1 {
    readonly control = new FormControl();
}
