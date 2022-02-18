import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-reorder-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiReorderExample1 {
    items: readonly string[] = [
        'John Cleese',
        'Eric Idle',
        'Michael Palin',
        'Terry Gilliam',
        'Terry Jones',
        'Graham Chapman',
    ];

    enabled = this.items;
}
