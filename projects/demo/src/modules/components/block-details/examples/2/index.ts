import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAmountOptionsProvider, TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiAvatarComponent, TuiBadgeDirective} from '@taiga-ui/kit';
import {TuiBlockDetailsDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    selector: 'tui-block-details-example-2',
    imports: [
        AsyncPipe,
        TuiAvatarComponent,
        TuiAmountPipe,
        TuiBlockDetailsDirective,
        TuiBadgeDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiAmountOptionsProvider({sign: 'always'})],
})
export class TuiBlockDetailsExample2 {
    protected readonly isMobile = inject(TUI_IS_MOBILE);
}
