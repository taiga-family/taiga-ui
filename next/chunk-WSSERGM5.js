import"./chunk-HU6DUUP4.js";var a=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiFilterPipe} from '@taiga-ui/cdk';

export interface Item {
    readonly name: string;
    readonly price: number;
}

@Component({
    imports: [TuiFilterPipe, TuiTable],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items: readonly Item[] = [
        {
            name: 'Sword',
            price: 1000,
        },
        {
            name: 'Axe',
            price: 100,
        },
        {
            name: 'Spear',
            price: 500,
        },
    ];

    protected readonly matcher = (item: Item, search: number): boolean =>
        item.price > search;
}
`;export{a as default};
