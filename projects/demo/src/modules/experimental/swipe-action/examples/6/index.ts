import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-swipe-action-example-6',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiSwipeActionExample6 {
    readonly items = [
        {
            icon: 'tuiIconPhone',
            title: 'Call now',
            subtitle: 'Call now',
        },
        {
            icon: 'tuiIconStar',
            title: 'Add to favorites',
            subtitle: 'Call now',
        },
        {
            icon: 'tuiIconTrash',
            title: 'Remove item',
            subtitle: 'Call now',
        },
    ];
}
