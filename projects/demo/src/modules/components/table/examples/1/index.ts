import {AsyncPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiFormatNumberPipeModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiTable, NgForOf, TuiFormatNumberPipeModule, AsyncPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
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
