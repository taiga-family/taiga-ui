import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiTitle} from '@taiga-ui/core';
import {TuiTiles} from '@taiga-ui/kit';

@Component({
    imports: [TuiDemo, TuiTiles, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected debounce = 0;
    protected order = new Map<number, number>();

    protected width = 1;
    protected height = 1;

    protected readonly items = [
        {id: 1, name: 'John Cleese'},
        {id: 2, name: 'Eric Idle'},
        {id: 3, name: 'Graham Chapman'},
    ];

    protected readonly examples = ['Basic', 'Vertical', 'Nested tiles'];
}
