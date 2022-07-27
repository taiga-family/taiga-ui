import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: `tui-combo-box-example-3`,
    templateUrl: `./index.html`,
    changeDetection,
})
export class TuiComboBoxExample3 {
    readonly items = [
        `John Cleese`,
        `Eric Idle`,
        `Graham Chapman`,
        `Michael Palin`,
        `Terry Gilliam`,
        `Terry Jones`,
    ];

    value = ``;
}
