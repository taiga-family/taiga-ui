import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-filter-by-input-example-2`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiFilterByInputExample2 {
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

    readonly matcher = (name: string, search: string): boolean =>
        name.split(` `).pop()!.toLowerCase().startsWith(search.toLowerCase());
}
