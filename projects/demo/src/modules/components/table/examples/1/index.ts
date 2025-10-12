import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiFormatNumberPipe} from '@taiga-ui/core';

@Component({
    imports: [AsyncPipe, TuiFormatNumberPipe, TuiTable],
    templateUrl: './index.html',
    styleUrl: './index.less',
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

    protected readonly columns = Object.keys(this.data[0]);
}
