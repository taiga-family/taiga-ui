import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';

@Component({
    selector: 'tui-sheet-dialog-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiSheetDialogExample5 {
    open = false;

    readonly options: Partial<TuiSheetDialogOptions> = {
        label: 'Alexander Inkin',
        closeable: true,
        fullscreen: true,
    };
}
