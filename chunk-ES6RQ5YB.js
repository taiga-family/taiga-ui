import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog, type TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';
import {TuiButton} from '@taiga-ui/core';
import {TuiFloatingContainer} from '@taiga-ui/layout';

@Component({
    imports: [TuiButton, TuiFloatingContainer, TuiSheetDialog],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly options: Partial<TuiSheetDialogOptions> = {
        label: 'Alexander Inkin',
        closable: false,
    };
}
`;export{t as default};
