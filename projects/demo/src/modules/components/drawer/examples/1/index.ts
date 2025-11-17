import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiLink, TuiPopup, TuiTitle} from '@taiga-ui/core';
import {TuiBadge, TuiDrawer, TuiTabs} from '@taiga-ui/kit';
import {TuiHeader, TuiNavigation} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiBadge,
        TuiButton,
        TuiDrawer,
        TuiHeader,
        TuiLink,
        TuiNavigation,
        TuiPopup,
        TuiRepeatTimes,
        TuiTabs,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly open = signal(false);
}
