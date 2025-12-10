import {Component, ElementRef, viewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBottomSheet} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiScrollbar} from '@taiga-ui/core';
import {TuiMessage, TuiTextarea} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiBottomSheet,
        TuiButton,
        TuiCardLarge,
        TuiMessage,
        TuiScrollbar,
        TuiTextarea,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly sheet = viewChild(TuiBottomSheet, {read: ElementRef});

    protected messages = ['Check that awesome bottom sheet out!'];
    protected value = '';

    protected onClick(message: string): void {
        this.messages = this.messages.concat(message);
        this.sheet()?.nativeElement.scrollTo({top: 0, behavior: 'smooth'});
    }

    protected onSubmit(): void {
        this.messages = this.messages.concat(this.value);
        this.value = '';
    }
}
