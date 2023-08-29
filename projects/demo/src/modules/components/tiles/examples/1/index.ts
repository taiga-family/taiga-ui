import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-tiles-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiTilesExample1 {
    items = [
        {content: 'Item 1', h: 1, w: 1},
        {content: 'Item 2', h: 1, w: 1},
        {content: 'Item 3', h: 1, w: 2},
        {content: 'Item 4', h: 1, w: 1},
        {content: 'Item 5', h: 1, w: 3},
        {content: 'Item 6', h: 1, w: 1},
        {content: 'rick', h: 2, w: 2},
        {content: 'Item 8', h: 1, w: 1},
        {content: 'Item 9', h: 1, w: 1},
    ];

    order = new Map();
}
