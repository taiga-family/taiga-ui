import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

interface Category {
    id: number;
    name: string;
}

@Component({
    standalone: true,
    imports: [
        NgForOf,
        NgIf,
        ReactiveFormsModule,
        TuiDataListWrapper,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected categories: Category[] = [
        {
            id: 1,
            name: 'Ashlar Hall',
        },
        {
            id: 2,
            name: 'Kryal Castle',
        },
        {
            id: 3,
            name: 'Mock castles',
        },
        {
            id: 4,
            name: 'Tureborg Castle',
        },
        {
            id: 5,
            name: 'Mrs. Edward B. Craig House',
        },
    ];

    protected readonly formControl = new FormControl([
        this.categories[0],
        this.categories[1],
        this.categories[3],
    ]);
}
