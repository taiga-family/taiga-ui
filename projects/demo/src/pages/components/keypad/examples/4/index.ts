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
import {TuiButton, TuiCell, TuiIcon, TuiTitle} from '@taiga-ui/core';
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
        TuiIcon,
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
    protected readonly digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    protected readonly value = signal('143');
    protected readonly open = signal(false);

    protected readonly options: Partial<TuiSheetDialogOptions> = {
        closable: true,
        bar: false,
        appearance: 'fullscreen',
    };

    protected append(digit: string): void {
        this.value.update((current) => `${current}${digit}`);
    }

    protected backspace(): void {
        this.value.update((current) => current.slice(0, -1));
    }

    protected clear(): void {
        this.value.set('');
    }
}
