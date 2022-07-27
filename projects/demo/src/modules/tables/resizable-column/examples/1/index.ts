import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-resizable-column-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiResizableColumnExample1 {
    readonly rows = [
        [`King Arthur`, `-`, `Arrested`],
        [`Sir Bedevere`, `The Wise`, `Arrested`],
        [`Sir Lancelot`, `The Brave`, `Arrested`],
        [`Sir Galahad`, `The Chaste`, `Killed`],
        [`Sir Robin`, `The Not-Quite-So-Brave-As-Sir-Lancelot`, `Killed`],
    ];
}
