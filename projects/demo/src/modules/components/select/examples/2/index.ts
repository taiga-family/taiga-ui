import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiOptionContent, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

import {Option} from './option';

@Component({
    standalone: true,
    imports: [
        Option,
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiOptionContent,
        TuiSelect,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
        'Option 5',
    ] as const;

    protected readonly control = new FormControl<string | null>(this.items[2]);
    protected checkedItemHandler = (option: string | null): boolean =>
        this.control.value === option;
}
