import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiResponsiveDialogOptions} from '@taiga-ui/addon-mobile';

@Component({
    selector: 'tui-sheet-dialog-example-6',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiSheetDialogExample6 {
    open = false;

    readonly options: Partial<TuiResponsiveDialogOptions> = {
        label: 'Responsive',
        size: 's',
    };
}
