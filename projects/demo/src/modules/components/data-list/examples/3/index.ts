import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-data-list-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiDataListExample3 {
    protected first = false;
    protected second = true;
    protected control = false;
    protected label = false;

    protected value = [];

    protected readonly burgers = ['Hamburger', 'Cheeseburger'];

    protected readonly drinks = ['Cola', 'Tea', 'Coffee', 'Slurm'];
}
