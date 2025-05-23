import {JsonPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiContext, TuiStringMatcher} from '@taiga-ui/cdk';
import {TuiDataList, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox} from '@taiga-ui/kit';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

interface Python {
    readonly id: number;
    readonly name: string;
}

@Component({
    standalone: true,
    imports: [
        JsonPipe,
        NgForOf,
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
        {id: 237, name: 'Eric Idle'},
        {id: 666, name: 'Michael Palin'},
        {id: 123, name: 'Terry Gilliam'},
        {id: 777, name: 'Terry Jones'},
        {id: 999, name: 'Graham Chapman'},
    ];

    protected readonly content: PolymorpheusContent<TuiContext<number | null>> = ({
        $implicit: id,
    }) => this.items.find((item) => item.id === id)?.name ?? '';

    protected readonly matcher: TuiStringMatcher<number> = (id, query) => {
        const {name} = this.items.find((item) => item.id === id)!;

        return String(id) === query || name.toLowerCase() === query.toLowerCase();
    };
}
