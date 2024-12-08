import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiBooleanHandler, TuiStringHandler} from '@taiga-ui/cdk';
import {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

interface Item {
    id: number;
    name: string;
}

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiSelectModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected itemStringControl = new FormControl<string | null>(null);
    protected itemGroupControl = new FormControl<string | null>(null);
    protected itemControl = new FormControl<Item | null>(null);

    protected items = [
        'Luke Skywalker and a long time ago in a galaxy far, far away..',
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
        {name: 'Luke Skywalker and a long time ago in a galaxy far, far away..', id: 1},
        {name: 'Leia Organa Solo', id: 2},
        {name: 'Darth Vader', id: 3},
        {name: 'Han Solo', id: 4},
        {name: 'Obi-Wan Kenobi', id: 5},
        {name: 'Yoda', id: 6},
    ];

    protected labels = ['Salad', 'Soup'];

    protected stringify: TuiStringHandler<Item> = (item) => item.name;

    protected disabledItemHandler: TuiBooleanHandler<string> = (item) =>
        item.startsWith('Chicken');
}
