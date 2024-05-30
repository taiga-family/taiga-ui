import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiContext} from '@taiga-ui/cdk';
import {TuiDataListDirective, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiDataListWrapperComponent} from '@taiga-ui/kit';
import {TuiMultiSelectModule, TuiTagModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    imports: [
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
        FormsModule,
        TuiDataListWrapperComponent,
        TuiDataListDirective,
        NgForOf,
        TuiTagModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly items = [
        'Luke Skywalker',
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
        this.value = this.value.filter(val => val !== item);
    }
}
