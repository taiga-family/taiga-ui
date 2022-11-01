import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostListener,
    Inject,
    Input,
    Optional,
    Renderer2,
    Sanitizer,
    SecurityContext,
    ViewEncapsulation,
} from '@angular/core';
import {TuiTiptapEditorDirective} from '@taiga-ui/addon-editor/directives/tiptap-editor';
import {TUI_EDITOR_STYLES} from '@taiga-ui/addon-editor/tokens';
import {tuiIsElement} from '@taiga-ui/cdk';
import {TUI_SANITIZER} from '@taiga-ui/core';

// @dynamic
@Component({
    selector: `tui-editor-socket`,
    template: ``,
    styleUrls: [`./editor-socket.component.less`],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: `tui-editor-socket`,
    },
})
export class TuiEditorSocketComponent {
    @Input()
    set content(content: string) {
        this.renderer.setProperty(
            this.elementRef.nativeElement,
            `innerHTML`,
            this.tuiSanitizer
                ? this.tuiSanitizer.sanitize(
                      SecurityContext.HTML,
                      content.replace(/colwidth/g, `width`),
                  )
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
        @Inject(DOCUMENT)
        private readonly document: Document,
        @Optional()
        @Inject(TuiTiptapEditorDirective)
        private readonly editor: TuiTiptapEditorDirective | null,
    ) {
        if (head.querySelector(`style[data-tui-editor-socket]`)) {
            return;
        }

        const style = renderer.createElement(`style`);

        renderer.setProperty(style, `textContent`, styles);
        renderer.setAttribute(style, `data-tui-editor-socket`, ``);

        head.appendChild(style);
    }

    /**
     * @description:
     * the main problem is that the external environment editor can use different base href="../"
     * More information: https://rogerkeays.com/blog/using-base-href-with-anchors
     */
    @HostListener(`click`, [`$event`])
    click(event: Event): void {
        if (this.editor || !tuiIsElement(event.target as Node)) {
            return;
        }

        const href = (event.target as Element)?.closest(`a`)?.getAttribute(`href`) || ``;

        if (!href.startsWith(`#`)) {
            return;
        }

        this.document.location.hash = href.replace(`#`, ``);
        event.preventDefault();
    }
}
