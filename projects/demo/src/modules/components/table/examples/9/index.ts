import {AsyncPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiExpand, TuiFormatNumberPipe, TuiHint, TuiIcon} from '@taiga-ui/core';
import {TuiChevron, TuiChip} from '@taiga-ui/kit';

interface Item {
    firstName: string;
    lastName: string;
    role: string;
    balance: number;
}

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgForOf,
        TuiChevron,
        TuiChip,
        TuiExpand,
        TuiFormatNumberPipe,
        TuiHint,
        TuiIcon,
        TuiMapperPipe,
        TuiTable,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly basicData: Item[] = [
        {
            firstName: 'Alex',
            lastName: 'Inkin',
            role: 'dev',
            balance: 1323525,
        },
        {
            firstName: 'Roman',
            lastName: 'Sedov',
            role: 'dev',
            balance: 423242,
        },
        {
            firstName: 'Andrei',
            lastName: 'Serebrennikov',
            role: 'dev',
            balance: 4223242,
        },
    ];

    protected readonly manualOpenData: Item[] = [
        {
            firstName: 'Joe',
            lastName: 'Wilson',
            role: 'design',
            balance: 423242,
        },
        {
            firstName: 'Julia',
            lastName: 'Johnson',
            role: 'design',
            balance: 4223242,
        },
    ];

    protected readonly customContentData: Item[] = [
        ...this.basicData,
        ...this.manualOpenData,
    ];

    protected readonly columns = ['action', 'firstName', 'lastName', 'role', 'balance'];

    protected manualOpen = false;

    public getSumBalance(people: Item[]): number {
        return people.reduce((res, item) => {
            res += item.balance;

            return res;
        }, 0);
    }

    protected manualToggle(): void {
        this.manualOpen = !this.manualOpen;
    }
}
