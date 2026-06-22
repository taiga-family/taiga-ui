import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiInputChip,
    TuiMultiSelect,
} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiInputChip,
        TuiMultiSelect,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<readonly string[]>([]);
    protected readonly items = ['Caesar', 'Greek', 'Apple and Chicken'] as const;
}
