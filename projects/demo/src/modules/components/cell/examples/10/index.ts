import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog, type TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiBadgeNotification} from '@taiga-ui/kit';
import {TuiCell, TuiCellStretch} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiBadgeNotification,
        TuiButton,
        TuiCell,
        TuiCellStretch,
        TuiSheetDialog,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly options: Partial<TuiSheetDialogOptions> = {
        label: 'Navigation',
        closeable: true,
    };
}
