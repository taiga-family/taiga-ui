import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiTiles} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiIcon, TuiTiles],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = [
        {content: 'Item 1', order: new Map()},
        {content: 'Item 2', order: new Map()},
        {content: 'Item 3', order: new Map()},
        {content: 'Item 4', order: new Map()},
    ];

    protected order = new Map();
}
