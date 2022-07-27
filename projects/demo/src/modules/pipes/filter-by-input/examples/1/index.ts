import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-filter-by-input-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiFilterByInputExample1 {
    readonly items = [
        `John Cleese`,
        `Eric Idle`,
        `Graham Chapman`,
        `Michael Palin`,
        `Terry Gilliam`,
        `Terry Jones`,
    ];

    readonly form = new FormGroup({
        user: new FormControl(),
    });
}
