import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiContext} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-multi-select-example-11',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiMultiSelectExample11 {
    readonly items = [
        'Luke Skywalker',
        'Leia Organa Solo',
        'Darth Vader',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    value: string[] = this.items;

    content: PolymorpheusContent<TuiContext<string[]>> = ({$implicit: {length}}) =>
        `Selected: ${length}`;

    remove(item: string): void {
        this.value = this.value.filter(val => val !== item);
    }
}
