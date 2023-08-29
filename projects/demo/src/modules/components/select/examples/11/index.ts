import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBooleanHandler, TuiStringHandler} from '@taiga-ui/cdk';

interface Item {
    id: number;
    name: string;
}

@Component({
    selector: 'tui-select-example-11',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiSelectExample11 {
    itemStringControl = new FormControl();
    itemGroupControl = new FormControl();
    itemControl = new FormControl();

    items = [
        'Luke Skywalker',
        'Leia Organa Solo',
        'Darth Vader',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    groupItems = [
        ['Caesar', 'Greek', 'Apple and Chicken'],
        ['Broccoli Cheddar', 'Chicken and Rice', 'Chicken Noodle'],
    ];

    customItems: readonly Item[] = [
        {id: 1, name: 'Luke Skywalker'},
        {id: 2, name: 'Leia Organa Solo'},
        {id: 3, name: 'Darth Vader'},
        {id: 4, name: 'Han Solo'},
        {id: 5, name: 'Obi-Wan Kenobi'},
        {id: 6, name: 'Yoda'},
    ];

    labels = ['Salad', 'Soup'];

    stringify: TuiStringHandler<Item> = item => item.name;

    disabledItemHandler: TuiBooleanHandler<string> = item => item.startsWith('Chicken');
}
