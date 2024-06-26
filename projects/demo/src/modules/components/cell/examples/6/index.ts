import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDropdown, TuiGroup} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiCell, TuiDropdown, TuiGroup, TuiButton, TuiDataListWrapper, NgFor],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {
            icon: '@tui.phone',
            toString: () => 'Call now',
        },
        {
            icon: '@tui.star',
            toString: () => 'Add to favorites',
        },
        {
            icon: '@tui.trash',
            toString: () => 'Remove item',
        },
    ];
}
