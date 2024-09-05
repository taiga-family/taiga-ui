import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiButton} from '@taiga-ui/core';
import {TuiBadgedContent, TuiBadgeNotification, TuiChip, TuiFade} from '@taiga-ui/kit';
import {TuiAsideItemDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiChip,
        TuiAmountPipe,
        AsyncPipe,
        TuiBadgedContent,
        TuiBadgeNotification,
        TuiButton,
        TuiFade,
        TuiAsideItemDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected selected = false;
}
