import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiFilterByInputPipe, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiInputChip, TuiMultiSelect} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiDataList,
        TuiFilterByInputPipe,
        TuiInputChip,
        TuiMultiSelect,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: string[] = [];

    protected readonly items = [
        'Pascal',
        'Perl',
        'PHP',
        'Python',
        'Java',
        'JavaScript',
        'TypeScript',
    ];

    protected readonly notInList = (item: string): boolean => !this.items.includes(item);
}
