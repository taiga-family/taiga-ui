import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiBooleanHandler, TuiStringHandler} from '@taiga-ui/cdk';

interface Item {
    id: number;
    name: string;
}

@Component({
    selector: 'tui-select-example-11',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiSelectExample11 {
    protected itemStringControl = new FormControl<string | null>(null);
    protected itemGroupControl = new FormControl<string | null>(null);
    protected itemControl = new FormControl<Item | null>(null);

    protected items = [
        'Luke Skywalker',
        'Leia Organa Solo',
        'Darth Vader',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    protected groupItems = [
        ['Caesar', 'Greek', 'Apple and Chicken'],
        ['Broccoli Cheddar', 'Chicken and Rice', 'Chicken Noodle'],
    ];

    protected customItems: readonly Item[] = [
        {name: 'Luke Skywalker', id: 1},
        {name: 'Leia Organa Solo', id: 2},
        {name: 'Darth Vader', id: 3},
        {name: 'Han Solo', id: 4},
        {name: 'Obi-Wan Kenobi', id: 5},
        {name: 'Yoda', id: 6},
    ];

    protected labels = ['Salad', 'Soup'];

    protected stringify: TuiStringHandler<Item> = item => item.name;

    protected disabledItemHandler: TuiBooleanHandler<string> = item =>
        item.startsWith('Chicken');
}
