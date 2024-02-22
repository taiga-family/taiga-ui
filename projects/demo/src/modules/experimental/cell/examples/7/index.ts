import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-cell-example-7',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiCellExample7 {
    protected readonly items = [
        {
            icon: 'tuiIconEyeLarge',
            title: 'Show more',
            subtitle: 'Ctrl + Shift + M',
        },
        {
            icon: 'tuiIconMailLarge',
            title: 'Send message',
            subtitle: 'Keep it short',
        },
        {
            icon: 'tuiIconLockLarge',
            title: 'Access',
            subtitle: 'Block your account',
        },
    ];

    protected value = this.items[0];
}
