import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-filter-by-input-example-3`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiFilterByInputExample3 {
    readonly items = [
        {name: `John Cleese`},
        {name: `Eric Idle`},
        {name: `Graham Chapman`},
        {name: `Michael Palin`},
        {name: `Terry Gilliam`},
        {name: `Terry Jones`},
    ];

    readonly form = new FormGroup({
        user: new FormControl(),
    });

    readonly stringify = ({name}: {name: string}): string => name;
}
