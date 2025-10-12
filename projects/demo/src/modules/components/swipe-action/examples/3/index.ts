import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiSwipeActions, TuiSwipeActionsAutoClose} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    imports: [
        AsyncPipe,
        TuiAmountPipe,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiSwipeActions,
        TuiSwipeActionsAutoClose,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
