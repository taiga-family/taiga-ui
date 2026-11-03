import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable, TuiTableControl} from '@taiga-ui/addon-table';
import {TuiCheckbox} from '@taiga-ui/core';

interface Item {
    readonly name: string;
    readonly price: number;
    readonly available: boolean;
}

@Component({
    imports: [FormsModule, TuiCheckbox, TuiTable, TuiTableControl],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data: readonly Item[] = [
        {name: 'Apple', price: 3, available: true},
        {name: 'Banana', price: 2, available: false},
        {name: 'Kiwi', price: 5, available: true},
        {name: 'Orange', price: 4, available: false},
        {name: 'Grapes', price: 7, available: true},
    ];

    protected selected: readonly Item[] = [this.data[3]!];
}
