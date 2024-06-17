import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiButton} from '@taiga-ui/core';
import {
    TuiBadgedContentComponent,
    TuiBadgeNotificationComponent,
    TuiChip,
    TuiFadeDirective,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiChip,
        TuiAmountPipe,
        AsyncPipe,
        TuiBadgedContentComponent,
        TuiBadgeNotificationComponent,
        TuiButton,
        TuiFadeDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected selected = false;
}
