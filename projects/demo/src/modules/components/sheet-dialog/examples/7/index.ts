import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';
import {TuiSheetDialog} from '@taiga-ui/addon-mobile';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton, TuiRepeatTimes, TuiSheetDialog],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly options: Partial<TuiSheetDialogOptions> = {
        label: 'Alexander Inkin',
        closeable: true,
        fullscreen: true,
    };
}
