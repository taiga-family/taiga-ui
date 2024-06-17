import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';
import {TuiSheetDialogDirective} from '@taiga-ui/addon-mobile';
import {TuiButtonDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButtonDirective, TuiSheetDialogDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly options: Partial<TuiSheetDialogOptions> = {
        label: 'Alexander Inkin',
        closeable: false,
    };
}
