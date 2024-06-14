import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiDropdown, TuiDropdownOpen} from '@taiga-ui/core';
import {TuiChevron, TuiSwitch, TuiTab, TuiTabsHorizontal} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiTabsHorizontal,
        TuiTab,
        TuiChevron,
        TuiDropdown,
        TuiDropdownOpen,
        TuiDataList,
        ReactiveFormsModule,
        TuiSwitch,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        option: new FormControl(false),
    });

    protected open = false;
    protected openSettings = false;

    protected index = 0;

    protected onClick(): void {
        this.open = false;
        this.index = 1;
    }
}
