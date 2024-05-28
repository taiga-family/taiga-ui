import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataListComponent,
    TuiDropdownDirective,
    TuiDropdownHoverDirective,
    TuiDropdownOpenDirective,
    TuiOptionComponent,
} from '@taiga-ui/core';
import {TuiDataListWrapperModule} from '@taiga-ui/kit';
import {TuiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiButtonDirective,
        TuiDropdownHoverDirective,
        TuiDropdownDirective,
        TuiDropdownOpenDirective,
        TuiSelectModule,
        ReactiveFormsModule,
        TuiActiveZoneDirective,
        TuiDataListWrapperModule,
        TuiDataListComponent,
        NgForOf,
        TuiOptionComponent,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly items = ['Edit', 'Download', 'Rename', 'Delete'];

    protected readonly selectItems = ['Item 1', 'Item 2'];

    protected open = false;

    protected selected = new FormControl<string | null>(null);
}
