import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog, type TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiCell, TuiCellStretch, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadgeNotification} from '@taiga-ui/kit';

@Component({
    imports: [
        TuiAvatar,
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
        closable: true,
    };
}
`;export{i as default};
