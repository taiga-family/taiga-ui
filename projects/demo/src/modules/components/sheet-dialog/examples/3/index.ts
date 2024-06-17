import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiSheetDialogDirective} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiTitleDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [
        TuiButton,
        TuiTitleDirective,
        TuiSheetDialogDirective,
        TuiAmountPipe,
        AsyncPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
}
