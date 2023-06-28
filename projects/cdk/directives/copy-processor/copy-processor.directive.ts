import {Directive, HostListener, Inject, Input} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiGetSelectedText} from '@taiga-ui/cdk/utils';
import {identity} from 'rxjs';

@Directive({
    selector: '[tuiCopyProcessor]',
})
export class TuiCopyProcessorDirective {
    @Input()
    tuiCopyProcessor: TuiStringHandler<string> = identity;

    constructor(@Inject(WINDOW) private readonly win: Window) {}

    @HostListener('copy.prevent', ['$event'])
    onCopy(event: ClipboardEvent): void {
        const text = tuiGetSelectedText(this.win);

        if (text) {
            event.clipboardData?.setData('text/plain', this.tuiCopyProcessor(text));
        }
    }
}
