import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';

@Component({
    selector: 'tui-sheet-dialog-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiSheetDialogExample2 {
    open = false;

    readonly options: Partial<TuiSheetDialogOptions> = {
        label: 'Alexander Inkin',
        closeable: false,
    };
}
