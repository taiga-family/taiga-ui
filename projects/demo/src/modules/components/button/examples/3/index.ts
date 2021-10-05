import {Component} from '@angular/core';
import {TUI_ARROW} from '@taiga-ui/kit';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-button-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiButtonExample3 {
    readonly arrow = TUI_ARROW;

    open = false;

    onClick() {
        this.open = !this.open;
    }
}
