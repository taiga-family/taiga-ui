import"./chunk-HU6DUUP4.js";var i=`import {KeyValuePipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiButton, TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAccordion, TuiAvatar} from '@taiga-ui/kit';

interface Operation {
    title: string;
    subtitle?: string;
    sum?: number;
    time?: string;
}

@Component({
    imports: [
        KeyValuePipe,
        TuiAccordion,
        TuiAmountPipe,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly operations = {
        Today: [],
        Yesterday: [
            {
                title: 'Cashback',
                subtitle: 'Pot of gold',
                sum: 237,
                time: '19:32',
            },
            {title: 'Failed to load'},
        ],
        'January 6, 2021': [
            {
                title: 'Salary',
                subtitle: 'Account number \u2022\u2022\u2022\u2022237',
                sum: 43256,
                time: '11:02',
            },
            {
                title: 'Shaman Hat',
                subtitle: 'Insurrection Apparel',
                sum: -99,
                time: '09:11',
            },
            {
                title: 'Shaman Makeup',
                subtitle: 'Insurrection Apparel',
                sum: -75,
                time: '09:11',
            },
        ],
    };

    protected getIcon(operation: Operation): string {
        if (!operation.sum) {
            return '@tui.triangle-alert';
        }

        return operation.sum > 0 ? '@tui.thumbs-up' : '@tui.thumbs-down';
    }

    protected sum(operations: readonly Operation[]): number {
        return operations.reduce((acc, {sum}) => acc + (sum || 0), 0);
    }

    protected orderBy(): number {
        return 0;
    }
}
`;export{i as default};
