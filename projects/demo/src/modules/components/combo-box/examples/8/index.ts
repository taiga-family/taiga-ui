import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

interface Dictionary {
    readonly id: number;
    readonly name: string;
}

const DICTIONARY: Dictionary[] = [
    {id: 1, name: 'Luke Skywalker'},
    {id: 2, name: 'Princess Leia'},
    {id: 3, name: 'Darth Vader'},
    {id: 4, name: 'Han Solo'},
    {id: 5, name: 'Obi-Wan Kenobi'},
    {id: 6, name: 'Yoda'},
];

@Component({
    selector: 'tui-combox-box-example-8',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiComboBoxExample8 {
    readonly control = new FormControl(3);
    readonly items = DICTIONARY.map(({id}) => id);
    readonly stringify = (id: number): string =>
        DICTIONARY.find(item => item.id === id)?.name || '';
}
