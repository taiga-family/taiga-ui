import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAmountOptionsProvider, TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiTitleDirective} from '@taiga-ui/core';
import {TuiAvatarComponent, TuiBadgeDirective, TuiFadeDirective} from '@taiga-ui/kit';
import {TuiBlockDetailsDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        TuiAvatarComponent,
        TuiAmountPipe,
        TuiBlockDetailsDirective,
        TuiBadgeDirective,
        TuiTitleDirective,
        TuiFadeDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiAmountOptionsProvider({sign: 'always'})],
})
export default class Example {
    protected readonly isMobile = inject(TUI_IS_MOBILE);
}
