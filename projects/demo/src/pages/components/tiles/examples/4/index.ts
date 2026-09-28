import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiTiles} from '@taiga-ui/kit';

@Component({
    imports: [TuiIcon, TuiTiles],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {name: 'John Cleese', role: 'Actor', email: 'john.cleese@example.com'},
        {name: 'Eric Idle', role: 'Actor', email: 'eric.idle@example.com'},
        {name: 'Graham Chapman', role: 'Actor', email: 'graham.chapman@example.com'},
        {name: 'Michael Palin', role: 'Actor', email: 'michael.palin@example.com'},
    ];

    protected order = new Map();
}
