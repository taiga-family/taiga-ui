import {Directive, ElementRef} from '@angular/core';
import {TUI_SCROLL_REF} from '@taiga-ui/cdk/tokens';

export const TUI_SCROLL_REF_SELECTOR = '[tuiScrollRef]';

/**
 * @deprecated: use {@link TUI_SCROLL_REF_SELECTOR}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SCROLL_REF_SELECTOR = TUI_SCROLL_REF_SELECTOR;

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
