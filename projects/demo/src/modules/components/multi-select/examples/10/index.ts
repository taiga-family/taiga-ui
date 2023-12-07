import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBooleanHandler, TuiStringHandler} from '@taiga-ui/cdk';

interface Item {
    readonly id: number;
    readonly name: string;
}
@Component({
    selector: 'tui-multi-select-example-10',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiMultiSelectExample10 {
    itemStringControl = new UntypedFormControl();
    itemControl = new UntypedFormControl();
    itemStringGroupControl = new UntypedFormControl();
    itemGroupControl = new UntypedFormControl();

    items = [
        'Luke Skywalker',
        'Leia Organa Solo',
        'Darth Vader',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    customItems: readonly Item[] = [
        {name: 'Luke Skywalker', id: 1},
        {name: 'Leia Organa Solo', id: 2},
        {name: 'Darth Vader', id: 3},
        {name: 'Han Solo', id: 4},
        {name: 'Obi-Wan Kenobi', id: 5},
        {name: 'Yoda', id: 6},
    ];

    groupItems = [
        ['Caesar', 'Greek', 'Apple and Chicken'],
        ['Broccoli Cheddar', 'Chicken and Rice', 'Chicken Noodle'],
    ];

    customGroupItems: readonly Item[][] = [
        [
            {name: 'Caesar', id: 1},
            {name: 'Apple and Chicken', id: 2},
        ],
        [
            {name: 'Broccoli Cheddar', id: 3},
            {name: 'Chicken and Rice', id: 4},
            {name: 'Chicken Noodle', id: 5},
        ],
    ];

    labels = ['Salad', 'Soup'];

    stringify: TuiStringHandler<Item> = item => item.name;

    disableHandler: TuiBooleanHandler<string> = item => item.startsWith('Broccoli');
    disableItemHandler: TuiBooleanHandler<Item> = ({name}) => name.startsWith('Broccoli');
}
