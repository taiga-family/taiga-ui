import {ElementRef, inject, Pipe, PipeTransform} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_ICON_COLORED} from '@taiga-ui/experimental/constants';
import {TUI_ICON_RESOLVER} from '@taiga-ui/experimental/tokens';

@Pipe({
    name: 'tuiIcon',
})
export class TuiIconPipe implements PipeTransform {
    readonly transform = inject<TuiStringHandler<string>>(TUI_ICON_RESOLVER);
    readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

    constructor() {
        // TODO: Consider another way in v4.0
        /**
         * This would cause dispatch after parent component change detection run
         * and handlers (such HostListener) will be attached
         */
        void Promise.resolve().then(() =>
            this.el.dispatchEvent(new CustomEvent(TUI_ICON_COLORED, {bubbles: true})),
        );
    }
}
