import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: `tui-combo-box-example-4`,
    templateUrl: `./index.html`,
    changeDetection,
})
export class TuiComboBoxExample4 {
    value = null;

    readonly items = [
        {name: `John`, surname: `Cleese`},
        {name: `Eric`, surname: `Idle`},
        {name: `Graham`, surname: `Chapman`},
        {name: `Michael`, surname: `Palin`},
        {name: `Terry`, surname: `Gilliam`},
        {name: `Terry`, surname: `Jones`},
    ];

    readonly stringify = (item: {name: string; surname: string}): string =>
        `${item.name} ${item.surname}`;
}
