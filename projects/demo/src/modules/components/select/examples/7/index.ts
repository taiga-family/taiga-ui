import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {EMPTY_ARRAY} from '@taiga-ui/cdk';
import type {TuiValueContentContext} from '@taiga-ui/core';
import {
    TuiDataListComponent,
    TuiDataListDirective,
    TuiOptGroupDirective,
    TuiOptionComponent,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiMultiSelectModule, TuiSelectModule} from '@taiga-ui/legacy';

interface Account {
    readonly account: string;
    readonly name: string;
}

const BANK: readonly Account[] = [
    {
        name: 'Ruble',
        account: '1234567890987654321',
    },
    {
        name: 'Dollar',
        account: '1234567890987654321',
    },
];

const OTHERS: readonly Account[] = [
    {
        name: 'Bank',
        account: '1234567890987654321',
    },
    {
        name: 'Other bank',
        account: '1234567890987654321',
    },
    {
        name: 'Bank of America',
        account: '1234567890987654321',
    },
];

const CASH: Account = {
    name: 'Cash',
    account: '',
};

@Component({
    standalone: true,
    imports: [
        TuiSelectModule,
        FormsModule,
        TuiDataListDirective,
        TuiDataListComponent,
        TuiOptGroupDirective,
        TuiOptionComponent,
        TuiMultiSelectModule,
        NgForOf,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = EMPTY_ARRAY;

    protected readonly all = EMPTY_ARRAY;
    protected readonly cash = CASH;
    protected readonly bank = BANK;
    protected readonly others = OTHERS;

    protected readonly content: TuiStringHandler<
        TuiValueContentContext<readonly unknown[]>
    > = ({$implicit: {length}}) => (length ? `${length} accounts` : 'All');
}
