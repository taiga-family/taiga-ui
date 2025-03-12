import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAsOptionContent, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

import {Option} from './option';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiSelect,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiAsOptionContent(Option)],
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
}
