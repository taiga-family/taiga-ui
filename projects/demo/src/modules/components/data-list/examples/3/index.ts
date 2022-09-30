import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_ARROW} from '@taiga-ui/kit';

@Component({
    selector: `tui-data-list-example-3`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiDataListExample3 {
    value = [];

    readonly burgers = [`Hamburger`, `Cheeseburger`];

    readonly drinks = [`Cola`, `Tea`, `Coffee`, `Slurm`];

    readonly arrow = TUI_ARROW;
}
