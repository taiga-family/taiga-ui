import {Component} from '@angular/core';
import {EMPTY_ARRAY, TuiStringHandler} from '@taiga-ui/cdk';
import {TuiValueContentContext} from '@taiga-ui/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

interface Account {
    readonly name: string;
    readonly account: number;
}

const BANK: ReadonlyArray<Account> = [
    {
        name: 'Рублевый счет',
        account: 1234567890987654321,
    },
    {
        name: 'Долларовый счет',
        account: 1234567890987654321,
    },
];

const OTHERS: ReadonlyArray<Account> = [
    {
        name: 'Сбер',
        account: 1234567890987654321,
    },
    {
        name: 'ВТБ',
        account: 1234567890987654321,
    },
    {
        name: 'Bank of America',
        account: 1234567890987654321,
    },
];

const CASH: Account = {
    name: 'Наличные',
    account: NaN,
};

@Component({
    selector: 'tui-select-example-7',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiSelectExample7 {
    value = EMPTY_ARRAY;

    readonly all = EMPTY_ARRAY;
    readonly cash = CASH;
    readonly bank = BANK;
    readonly others = OTHERS;

    readonly content: TuiStringHandler<
        TuiValueContentContext<ReadonlyArray<unknown>>
    > = ({$implicit: {length}}) => (length ? `${length} счета` : 'Все');
}
