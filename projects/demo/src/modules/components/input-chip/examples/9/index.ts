import {Component, inject} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {ITEMS} from '@demo/tokens';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiSelectLike, TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiInputChip,
    TuiMultiSelect,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiInputChip,
        TuiMultiSelect,
        TuiSelectLike,
        TuiTable,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = inject(ITEMS);

    protected readonly multiControl = new FormControl(null, {
        validators: Validators.required,
    });

    protected readonly multiControl2 = new FormControl(null, {
        validators: Validators.required,
    });
}
