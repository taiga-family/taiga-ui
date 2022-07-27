import {Directive, ElementRef} from '@angular/core';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';

export const SCROLL_REF_SELECTOR = `[tuiScrollRef]`;

@Directive({
    selector: SCROLL_REF_SELECTOR,
    providers: [
        {
            provide: TUI_SCROLL_REF,
            useExisting: ElementRef,
        },
    ],
})
export class TuiScrollRefDirective {}
