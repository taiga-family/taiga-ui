import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiCheckbox, TuiChevron, TuiSwitch} from '@taiga-ui/kit';
import {TuiMultiSelectModule} from '@taiga-ui/legacy';

@Component({
    imports: [
        FormsModule,
        TuiButton,
        TuiCheckbox,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiMultiSelectModule,
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
