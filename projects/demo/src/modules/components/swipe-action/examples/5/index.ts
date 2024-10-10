import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiSwipeActions} from '@taiga-ui/addon-mobile';
import {
    TuiAppearance,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        TuiAmountPipe,
        TuiAppearance,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiDataList,
        TuiDropdown,
        TuiSwipeActions,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
