import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {EMPTY_ARRAY, TuiStringHandler} from '@taiga-ui/cdk';
import type {TuiValueContentContext} from '@taiga-ui/core';

interface Account {
    readonly name: string;
    readonly account: string;
}

const BANK: readonly Account[] = [
    {
        name: `Ruble`,
        account: `1234567890987654321`,
    },
    {
        name: `Dollar`,
        account: `1234567890987654321`,
    },
];

const OTHERS: readonly Account[] = [
    {
        name: `Bank`,
        account: `1234567890987654321`,
    },
    {
        name: `Other bank`,
        account: `1234567890987654321`,
    },
    {
        name: `Bank of America`,
        account: `1234567890987654321`,
    },
];

const CASH: Account = {
    name: `Cash`,
    account: ``,
};

@Component({
    selector: `tui-select-example-7`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiSelectExample7 {
    value = EMPTY_ARRAY;

    readonly all = EMPTY_ARRAY;
    readonly cash = CASH;
    readonly bank = BANK;
    readonly others = OTHERS;

    readonly content: TuiStringHandler<TuiValueContentContext<readonly unknown[]>> = ({
        $implicit: {length},
    }) => (length ? `${length} accounts` : `All`);
}
