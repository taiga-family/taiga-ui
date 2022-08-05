import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-input-tag-example-7`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiInputTagExample7 {
    value = [`Use`, `space`, `button`];
    customSeparator = /[\s,]/; // Use space or comma to create new tag
}
