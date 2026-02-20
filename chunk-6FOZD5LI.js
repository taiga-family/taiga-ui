import"./chunk-HU6DUUP4.js";var o=`import {Component, ElementRef, ViewChild} from '@angular/core';
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
    @ViewChild(TuiBottomSheet, {read: ElementRef})
    private readonly sheet?: ElementRef<HTMLElement>;

    protected messages = ['Check that awesome bottom sheet out!'];
    protected value = '';

    protected onClick(message: string): void {
        this.messages = this.messages.concat(message);
        this.sheet?.nativeElement.scrollTo({top: 0, behavior: 'smooth'});
    }

    protected onSubmit(): void {
        this.messages = this.messages.concat(this.value);
        this.value = '';
    }
}
`;export{o as default};
