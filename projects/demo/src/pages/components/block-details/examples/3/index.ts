import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiResponsiveDialog} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiBlockDetails} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAmountPipe,
        TuiAvatar,
        TuiBlockDetails,
        TuiButton,
        TuiResponsiveDialog,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isMobile = inject(WA_IS_MOBILE);
    protected open = false;
}
