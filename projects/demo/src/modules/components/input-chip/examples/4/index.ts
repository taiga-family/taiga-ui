import {NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {ITEMS} from '@demo/tokens';
import {tuiIsString} from '@taiga-ui/cdk';
import {TuiDataList, TuiSelectLike, TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiHideSelectedPipe,
    TuiInputChip,
    TuiMultiSelect,
} from '@taiga-ui/kit';

interface User {
    readonly name: string;
    readonly index: number;
}

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        TuiChevron,
        TuiDataList,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiHideSelectedPipe,
        TuiInputChip,
        TuiMultiSelect,
        TuiSelectLike,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected arbitrary: string[] = [];
    protected pythons: string[] = [];
    protected multi: string[] = [];
    protected objects: User[] = [];

    protected readonly items = inject(ITEMS);
    protected readonly users = this.items.map((name, index) => ({name, index}));
    protected readonly more = [
        {name: 'Carol Cleveland', index: -1},
        {name: 'Neil Innes', index: -2},
    ];

    protected readonly strings = tuiIsString;
    protected readonly stringify = ({name}: User): string => name;
    protected readonly disabled = (item: string): boolean => !this.items.includes(item);
}
