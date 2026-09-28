import {Directive, ElementRef, InjectionToken} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiGenerateId} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiAsRectAccessor, TuiRectAccessor} from '@taiga-ui/core/classes';

export const TUI_HINT_ANCHOR = new InjectionToken<ElementRef<Element>>(
    ngDevMode ? 'TUI_HINT_ANCHOR' : '',
);

@Directive({
    providers: [
        tuiAsRectAccessor(TuiHintAnchor),
        tuiProvide(TUI_HINT_ANCHOR, ElementRef),
    ],
    host: {
        '[attr.data-tui-anchor]': 'anchor',
        '[style.anchor-name]': 'anchor',
    },
})
export class TuiHintAnchor extends TuiRectAccessor {
    protected readonly el = tuiInjectElement();
    protected readonly anchor = `--${tuiGenerateId()}`;

    public readonly type = 'hint';

    public getClientRect(): DOMRect {
        return this.el.getBoundingClientRect();
    }
}
