import"./chunk-42JZD6NG.js";var t=`import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiStringHandler, type TuiStringMatcher} from '@taiga-ui/cdk';
import {TuiDataList, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox} from '@taiga-ui/kit';

interface Python {
    readonly id: number;
    readonly name: string;
}

@Component({
    imports: [
        JsonPipe,
        ReactiveFormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataList,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<number | null>(777);

    protected readonly items: readonly Python[] = [
        {id: 42, name: 'John Cleese'},
        {id: 0, name: 'Eric Idle'},
        {id: 666, name: 'Michael Palin'},
        {id: 123, name: 'Terry Gilliam'},
        {id: 777, name: 'Terry Jones'},
        {id: 999, name: 'Graham Chapman'},
    ];

    protected readonly stringify: TuiStringHandler<number> = (id) =>
        this.items.find((item) => item.id === id)?.name ?? '';

    protected readonly matcher: TuiStringMatcher<number> = (id, query) => {
        const {name} = this.items.find((item) => item.id === id)!;

        return String(id) === query || name.toLowerCase() === query.toLowerCase();
    };
}
`;export{t as default};
