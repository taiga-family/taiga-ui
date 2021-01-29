import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    Input,
    Optional,
    Renderer2,
    Sanitizer,
    SecurityContext,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_EDITOR_STYLES} from '@taiga-ui/addon-editor/tokens';
import {TUI_SANITIZER} from '@taiga-ui/core';

// @dynamic
@Component({
    selector: 'tui-editor-socket',
    template: '',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-editor-socket',
    },
})
export class TuiEditorSocketComponent {
    @Input()
    set content(content: string) {
        this.renderer.setProperty(
            this.elementRef.nativeElement,
            'innerHTML',
            this.tuiSanitizer
                ? this.tuiSanitizer.sanitize(SecurityContext.HTML, content)
                : this.sanitizer.sanitize(SecurityContext.HTML, content),
        );
    }

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(Sanitizer) private readonly sanitizer: Sanitizer,
        @Inject(DOCUMENT) {head}: Document,
        @Inject(TUI_EDITOR_STYLES) styles: string,
        @Optional()
        @Inject(TUI_SANITIZER)
        private readonly tuiSanitizer: Sanitizer | null,
    ) {
        if (head.querySelector('style[data-tui-editor-socket]')) {
            return;
        }

        const style = renderer.createElement('style');

        renderer.setProperty(style, 'textContent', styles);
        renderer.setAttribute(style, 'data-tui-editor-socket', '');

        head.appendChild(style);
    }
}
