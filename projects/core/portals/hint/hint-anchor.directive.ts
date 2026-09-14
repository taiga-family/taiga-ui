import {Directive, ElementRef, InjectionToken} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiGenerateId} from '@taiga-ui/cdk/utils/miscellaneous';

export const TUI_HINT_ANCHOR = new InjectionToken<ElementRef<Element>>(
    ngDevMode ? 'TUI_HINT_ANCHOR' : '',
);

@Directive({
    providers: [tuiProvide(TUI_HINT_ANCHOR, ElementRef)],
    host: {
        '[attr.data-tui-anchor]': 'anchor',
        '[style.anchor-name]': 'anchor',
    },
})
export class TuiHintAnchor {
    protected readonly anchor = `--${tuiGenerateId()}`;
}
