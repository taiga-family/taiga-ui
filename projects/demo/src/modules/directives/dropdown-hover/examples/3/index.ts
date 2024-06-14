import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiActiveZone} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiDropdown, TuiDropdownOpen} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiButton,
        TuiDropdown,
        TuiDropdownOpen,
        TuiSelectModule,
        ReactiveFormsModule,
        TuiActiveZone,
        TuiDataListWrapper,
        TuiDataList,
        NgForOf,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = ['Edit', 'Download', 'Rename', 'Delete'];

    protected readonly selectItems = ['Item 1', 'Item 2'];

    protected open = false;

    protected selected = new FormControl<string | null>(null);
}
