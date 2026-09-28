import {Directive, effect, type ElementRef, input} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiGenerateId} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiAsRectAccessor, TuiRectAccessor} from '@taiga-ui/core/classes';

import {TUI_HINT_ANCHOR} from './hint-anchor.directive';

@Directive({
    selector: '[tuiHint][tuiHintHost]',
    providers: [tuiAsRectAccessor(TuiHintHost), tuiProvide(TUI_HINT_ANCHOR, TuiHintHost)],
})
export class TuiHintHost extends TuiRectAccessor implements ElementRef<HTMLElement> {
    public readonly tuiHintHost = input<HTMLElement>();
    public readonly type = 'hint';
    public nativeElement = tuiInjectElement();

    protected readonly sync = effect(() => {
        const anchorName = `--${tuiGenerateId()}`;

        this.nativeElement = this.tuiHintHost() || this.nativeElement;
        this.nativeElement.setAttribute('data-tui-anchor', anchorName);
        this.nativeElement.style.setProperty('anchor-name', anchorName);
    });

    public getClientRect(): DOMRect {
        return this.nativeElement.getBoundingClientRect();
    }
}
