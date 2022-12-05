import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-tiles-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiTilesExample2 {
    items: readonly string[] = [
        `John Cleese`,
        `Eric Idle`,
        `Michael Palin`,
        `Terry Gilliam`,
        `Terry Jones`,
        `Graham Chapman`,
    ];

    order = new Map();
}
