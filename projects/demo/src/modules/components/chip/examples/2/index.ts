import {NgForOf, NgIf, SlicePipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiAvatar, TuiChip} from '@taiga-ui/kit';
import {TuiAsideItemDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiChip,
        NgForOf,
        NgIf,
        TuiAvatar,
        SlicePipe,
        TuiButton,
        TuiAsideItemDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly sizes = ['m', 's', 'xs', 'xxs'] as const;
}
