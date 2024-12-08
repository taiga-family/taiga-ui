import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiContext} from '@taiga-ui/cdk';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {
    TuiMultiSelectModule,
    TuiTagModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        TuiDataList,
        TuiDataListWrapper,
        TuiMultiSelectModule,
        TuiTagModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        'Luke Skywalker and a long time ago in a galaxy far, far away..',
        'Leia Organa Solo',
        'Darth Vader',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    protected value: string[] = this.items;

    protected content: PolymorpheusContent<TuiContext<string[]>> = ({
        $implicit: {length},
    }) => `Selected: ${length}`;

    protected remove(item: string): void {
        this.value = this.value.filter((val) => val !== item);
    }
}
