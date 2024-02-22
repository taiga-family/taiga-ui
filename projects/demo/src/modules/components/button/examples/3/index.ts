import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_ARROW} from '@taiga-ui/kit';

@Component({
    selector: 'tui-button-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiButtonExample3 {
    protected readonly arrow = TUI_ARROW;
}
