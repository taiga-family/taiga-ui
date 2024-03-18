import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiAvatarComponent, TuiBadgeDirective, TuiCommentDirective} from '@taiga-ui/kit';
import {TuiBlockDetailsDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    selector: 'tui-block-details-example-1',
    imports: [
        AsyncPipe,
        TuiAvatarComponent,
        TuiCommentDirective,
        TuiAmountPipe,
        TuiBlockDetailsDirective,
        TuiBadgeDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiBlockDetailsExample1 {
    protected readonly isMobile = inject(TUI_IS_MOBILE);
}
