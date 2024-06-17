import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiButtonDirective} from '@taiga-ui/core';
import {
    TuiBadgedContentComponent,
    TuiBadgeNotificationComponent,
    TuiChipDirective,
    TuiFadeDirective,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiChipDirective,
        TuiAmountPipe,
        AsyncPipe,
        TuiBadgedContentComponent,
        TuiBadgeNotificationComponent,
        TuiButtonDirective,
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
