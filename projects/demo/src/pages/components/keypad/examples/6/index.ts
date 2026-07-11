import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiKeypad, type TuiKeypadKey} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiPopout} from '@taiga-ui/experimental';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiButton,
        TuiHeader,
        TuiKeypad,
        TuiPopout,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly phoneNumber = signal('');
    protected readonly open = signal(false);
    protected readonly isCalling = signal(false);

    protected readonly keys: readonly TuiKeypadKey[][] = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['*', '0', '#'],
    ];

    protected clear(): void {
        this.phoneNumber.set('');
    }

    protected call(): void {
        if (this.phoneNumber()) {
            this.isCalling.set(true);
        }
    }

    protected closeCall(): void {
        this.isCalling.set(false);
    }
}
