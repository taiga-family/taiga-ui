import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-tree-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    encapsulation,
    changeDetection,
})
export class TuiTreeExample2 {
    readonly data = [
        `Top level 1`,
        [`Second level item`, [`Third level 1`, `Third level 2`, `Third level 3`]],
        `Top level 2`,
        `Top level 3`,
        [`Second 1`, `Second 2`],
    ];
}
