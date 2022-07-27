import {Directive, Inject, Input, Renderer2} from '@angular/core';
import {TUI_FOCUSABLE_ITEM_ACCESSOR, TuiFocusableElementAccessor} from '@taiga-ui/cdk';

@Directive({
    selector: `[tuiInputOpacity]`,
})
export class TuiInputOpacityDirective {
    @Input()
    set tuiInputOpacity(opacity: number) {
        const {nativeFocusableElement} = this.tuiFocusableComponent;

        if (nativeFocusableElement) {
            this.renderer.setStyle(nativeFocusableElement, `opacity`, opacity / 100);
        }
    }

    constructor(
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)
        private readonly tuiFocusableComponent: TuiFocusableElementAccessor,
    ) {}
}
