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
import {TUI_SANITIZER} from '@taiga-ui/core';

// @dynamic
@Component({
    selector: 'tui-editor-socket,[tuiEditorSocket]',
    template: '',
    styleUrls: ['./editor-socket.component.less'],
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
                ? this.tuiSanitizer.sanitize(
                      SecurityContext.HTML,
                      content.replace(/colwidth/g, 'width'),
                  )
                : this.sanitizer.sanitize(SecurityContext.HTML, content),
        );
    }

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(Sanitizer) private readonly sanitizer: Sanitizer,
        @Optional()
        @Inject(TUI_SANITIZER)
        private readonly tuiSanitizer: Sanitizer | null,
    ) {}
}
