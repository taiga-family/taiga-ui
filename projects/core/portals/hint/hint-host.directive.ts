import {computed, Directive, effect, type ElementRef, input} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiGenerateId} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiAsRectAccessor, TuiRectAccessor} from '@taiga-ui/core/classes';

import {TUI_HINT_ANCHOR} from './hint-anchor.directive';

@Directive({
    selector: '[tuiHint][tuiHintHost]',
    providers: [tuiAsRectAccessor(TuiHintHost), tuiProvide(TUI_HINT_ANCHOR, TuiHintHost)],
    host: {
        '[attr.data-tui-anchor]': 'delegated() ? null : id',
        '[style.anchor-name]': 'delegated() ? "none" : id',
    },
})
export class TuiHintHost extends TuiRectAccessor implements ElementRef<HTMLElement> {
    private readonly el = tuiInjectElement();

    protected readonly id = `--${tuiGenerateId()}`;
    protected readonly delegated = computed(
        (host = this.tuiHintHost()) => host && host !== this.el,
    );

    public readonly tuiHintHost = input<HTMLElement>();
    public readonly type = 'hint';
    public nativeElement = this.el;

    protected readonly sync = effect(() => {
        this.nativeElement = this.tuiHintHost() || this.nativeElement;

        const anchorName = this.nativeElement.dataset?.tuiAnchor || this.id;

        this.nativeElement.setAttribute('data-tui-anchor', anchorName);
        this.nativeElement.style.setProperty('anchor-name', anchorName);
    });

    public getClientRect(): DOMRect {
        return this.nativeElement.getBoundingClientRect();
    }
}
