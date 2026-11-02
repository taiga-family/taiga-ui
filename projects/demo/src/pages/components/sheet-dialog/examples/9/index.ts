import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog, type TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiFloatingContainer, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiButton, TuiFloatingContainer, TuiHeader, TuiSheetDialog, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
    protected readonly stops = ['5.75rem', '13.875rem'];

    protected readonly options: Partial<TuiSheetDialogOptions> = {
        label: 'Programmatic snap',
        stops: this.stops,
    };
}
