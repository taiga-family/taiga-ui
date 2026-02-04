import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiSwipeActions, TuiSwipeActionsOnboarding} from '@taiga-ui/addon-mobile';
import {TuiAppearance, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiCell} from '@taiga-ui/layout';
import {AsyncPipe} from '@angular/common';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        TuiAmountPipe,
        TuiAppearance,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiSwipeActions,
        TuiSwipeActionsOnboarding,
        TuiTitle,
        TuiAvatar,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected onboarding = false;
}
