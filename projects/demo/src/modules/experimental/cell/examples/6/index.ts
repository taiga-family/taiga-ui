import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-cell-example-6',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiCellExample6 {
    readonly items = [
        {
            icon: 'tuiIconPhone',
            toString: () => 'Call now',
        },
        {
            icon: 'tuiIconStar',
            toString: () => 'Add to favorites',
        },
        {
            icon: 'tuiIconTrash',
            toString: () => 'Remove item',
        },
    ];
}
