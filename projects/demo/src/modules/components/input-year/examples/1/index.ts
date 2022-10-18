import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `input-year-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class InputYearExample1 {
    readonly control = new FormControl();
}
