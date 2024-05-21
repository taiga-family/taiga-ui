import {Directive, inject, Input, Renderer2} from '@angular/core';
import {TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk';

@Directive({
    standalone: true,
    selector: '[tuiInputOpacity]',
})
export class TuiInputOpacityDirective {
    private readonly focusable = inject(TUI_FOCUSABLE_ITEM_ACCESSOR);
    private readonly renderer = inject(Renderer2);

    @Input()
    public set tuiInputOpacity(opacity: number) {
        const {nativeFocusableElement} = this.focusable;

        if (nativeFocusableElement) {
            this.renderer.setStyle(nativeFocusableElement, 'opacity', opacity / 100);
        }
    }
}
