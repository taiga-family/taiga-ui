import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_ARROW} from '@taiga-ui/kit';

@Component({
    selector: `tui-button-example-3`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiButtonExample3 {
    readonly arrow = TUI_ARROW;
}
