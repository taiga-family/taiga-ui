import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFilterPipe} from '@taiga-ui/cdk';

export interface Item {
    readonly name: string;
    readonly price: number;
}

@Component({
    standalone: true,
    imports: [TuiFilterPipe, NgForOf],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
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
