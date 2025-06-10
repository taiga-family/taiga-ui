import {Directive, ElementRef} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';

export const SCROLL_REF_SELECTOR = '[tuiScrollRef]';

@Directive({
    standalone: true,
    selector: '[tuiScrollRef]',
    providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)],
})
export class TuiScrollRef {}
