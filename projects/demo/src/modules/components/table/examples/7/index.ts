import {AsyncPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import type {TuiContext, TuiStringHandler} from '@taiga-ui/cdk';
import {TuiButton, TuiFormatNumberPipe, TuiTextfield} from '@taiga-ui/core';
import {TuiButtonSelect, TuiDataListWrapper, TuiPagination} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiTable,
        NgForOf,
        TuiFormatNumberPipe,
        AsyncPipe,
        TuiButton,
        TuiButtonSelect,
        TuiPagination,
        FormsModule,
        TuiDataListWrapper,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data = [
        {
            name: 'Alex Inkin',
            balance: 1323525,
        },
        {
            name: 'Roman Sedov',
            balance: 423242,
        },
    ] as const;

    readonly items = [10, 50, 100];
    readonly content: TuiStringHandler<TuiContext<number>> = ({$implicit}) =>
        `${$implicit} items per page`;

    index = 4;
    length = 10;
    size = 10;
}
