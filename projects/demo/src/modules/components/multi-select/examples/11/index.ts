import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiContext} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-multi-select-example-11',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiMultiSelectExample11 {
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
