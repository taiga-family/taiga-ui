import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiKeypad,
    TuiSheetDialog,
    type TuiSheetDialogOptions,
} from '@taiga-ui/addon-mobile';
import {TuiAnimated} from '@taiga-ui/cdk';
import {TuiButton, TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiChip} from '@taiga-ui/kit';
import {TuiFloatingContainer} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAnimated,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiChip,
        TuiFloatingContainer,
        TuiKeypad,
        TuiSheetDialog,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = signal('143');
    protected readonly open = signal(false);

    protected readonly options: Partial<TuiSheetDialogOptions> = {
        closable: true,
        bar: false,
        appearance: 'fullscreen',
    };
}
