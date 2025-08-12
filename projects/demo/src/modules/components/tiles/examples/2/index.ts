import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {ITEMS} from '@demo/tokens';
import {TuiTiles} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiTiles],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = inject(ITEMS);
    protected order = new Map();
}
