import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCheckbox, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiButtonSelect, TuiChevron, TuiMultiSelect, TuiSwitch} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiButton,
        TuiButtonSelect,
        TuiCheckbox,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiMultiSelect,
        TuiSwitch,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected first = false;
    protected second = true;
    protected open = false;
    protected label = false;

    protected value = [];

    protected readonly burgers = ['Hamburger', 'Cheeseburger'];

    protected readonly drinks = ['Cola', 'Tea', 'Coffee', 'Slurm'];
}
`;export{o as default};
