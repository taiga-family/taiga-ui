import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRipple} from '@taiga-ui/addon-mobile';
import {TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiCellStretch} from '@taiga-ui/layout';
import {NgForOf} from '@angular/common';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        TuiAvatar,
        TuiCardLarge,
        TuiCell,
        TuiCellStretch,
        TuiRipple,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {
            icon: '@tui.eye',
            title: 'Show more',
            subtitle: 'Ctrl + Shift + M',
        },
        {
            icon: '@tui.mail',
            title: 'Send message',
            subtitle: 'Keep it short',
        },
        {
            icon: '@tui.lock',
            title: 'Access',
            subtitle: 'Block your account',
        },
    ];

    protected value = this.items[0]!;
}
