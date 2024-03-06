import {Directive, HostListener, inject, Input} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiGetSelectedText} from '@taiga-ui/cdk/utils';
import {identity} from 'rxjs';

@Directive({
    selector: '[tuiCopyProcessor]',
})
export class TuiCopyProcessorDirective {
    private readonly win = inject(WINDOW);

    @Input()
    public tuiCopyProcessor: TuiStringHandler<string> = identity;

    @HostListener('copy.prevent', ['$event'])
    protected onCopy(event: ClipboardEvent): void {
        const text = tuiGetSelectedText(this.win);

        if (text) {
            event.clipboardData?.setData('text/plain', this.tuiCopyProcessor(text));
        }
    }
}
