import {Component} from '@angular/core';
import {TUI_ARROW} from '@taiga-ui/kit';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-data-list-example-3',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiDataListExample3 {
    value = [];

    readonly burgers = ['Hamburger', 'Cheeseburger'];

    readonly drinks = ['Cola', 'Tea', 'Coffee', 'Slurm'];

    readonly arrow = TUI_ARROW;
}
