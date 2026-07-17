import {Component, type ElementRef, signal, viewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiKeypad} from '@taiga-ui/addon-mobile';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiPopout} from '@taiga-ui/experimental';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAutoFocus,
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
    private readonly input = viewChild<ElementRef<HTMLInputElement>>('input');

    protected readonly keys = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '*',
        '0',
        '#',
    ];

    protected readonly phoneNumber = signal('');
    protected readonly open = signal(false);
    protected readonly isCalling = signal(false);

    protected onKey(key: string): void {
        this.phoneNumber.update((current) => `${current}${key}`);
        this.refocus();
    }

    protected refocus(): void {
        this.input()?.nativeElement.focus();
    }

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
