import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

export interface Item {
    readonly name: string;
    readonly price: number;
}

@Component({
    selector: `tui-filter-example1`,
    templateUrl: `./template.html`,
    changeDetection,
    encapsulation,
})
export class TuiFilterExample1 {
    readonly items: readonly Item[] = [
        {
            name: `Sword`,
            price: 1000,
        },
        {
            name: `Axe`,
            price: 100,
        },
        {
            name: `Spear`,
            price: 500,
        },
    ];

    readonly matcher = (item: Item, search: number): boolean => item.price > search;
}
