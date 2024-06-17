import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTiles} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiTiles, NgForOf],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items: readonly string[] = [
        'John Cleese',
        'Eric Idle',
        'Michael Palin',
        'Terry Gilliam',
        'Terry Jones',
        'Graham Chapman',
    ];

    protected order = new Map();
}
