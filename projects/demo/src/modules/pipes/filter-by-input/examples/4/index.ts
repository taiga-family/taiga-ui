import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_FILTER_BY_INPUT_OPTIONS} from '@taiga-ui/kit';

@Component({
    selector: `tui-filter-by-input-example-4`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_FILTER_BY_INPUT_OPTIONS,
            useValue: {
                strictMode: false,
            },
        },
    ],
})
export class TuiFilterByInputExample4 {
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
