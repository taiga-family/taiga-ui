import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-filter-example1',
    templateUrl: './template.html',
    changeDetection,
    encapsulation,
})
export class TuiFilterExample1 {
    readonly items = [
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
    ] as const;

    matcher = (item: any, search: number) => item.price > search;
}
