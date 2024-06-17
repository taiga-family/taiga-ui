import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButton,
    TuiDataListComponent,
    TuiDropdownDirective,
    TuiDropdownHoverDirective,
    TuiDropdownOpenDirective,
    TuiOptionComponent,
} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiButton,
        TuiDropdownHoverDirective,
        TuiDropdownDirective,
        TuiDropdownOpenDirective,
        TuiSelectModule,
        ReactiveFormsModule,
        TuiDataListWrapper,
        TuiDataListComponent,
        NgForOf,
        TuiOptionComponent,
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
