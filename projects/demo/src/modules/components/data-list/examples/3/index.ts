import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiCheckbox, TuiChevron, TuiSwitch} from '@taiga-ui/kit';
import {TuiMultiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiButton,
        TuiChevron,
        TuiDropdown,
        TuiDataList,
        TuiMultiSelectModule,
        FormsModule,
        NgForOf,
        TuiCheckbox,
        TuiSwitch,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected first = false;
    protected second = true;
    protected control = false;
    protected label = false;

    protected value = [];

    protected readonly burgers = ['Hamburger', 'Cheeseburger'];

    protected readonly drinks = ['Cola', 'Tea', 'Coffee', 'Slurm'];
}
