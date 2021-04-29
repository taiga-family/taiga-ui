import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

export interface Item {
    readonly name: string;
    readonly price: number;
}

@Component({
    selector: 'tui-filter-example1',
    templateUrl: './template.html',
    changeDetection,
    encapsulation,
})
export class TuiFilterExample1 {
    readonly items: ReadonlyArray<Item> = [
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

    readonly matcher = (item: Item, search: number) => item.price > search;
}
