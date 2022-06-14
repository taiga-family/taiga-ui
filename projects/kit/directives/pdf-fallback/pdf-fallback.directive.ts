import {
    AfterViewInit,
    Directive,
    ElementRef,
    Inject,
    Input,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk/services';
import {TUI_IS_CHROMIUM, TUI_IS_FIREFOX, TUI_IS_WEBKIT} from '@taiga-ui/cdk/tokens';
import {fromEvent, race, timer} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

const TIMEOUT = 1_000;

@Directive({
    selector: 'iframe[tuiPdfFallback]',
    providers: [TuiDestroyService],
})
export class TuiPdfFallbackDirective implements AfterViewInit {
    @Input()
    tuiPdfFallback!: TemplateRef<unknown>;

    constructor(
        @Inject(ElementRef) private readonly element: ElementRef<HTMLIFrameElement>,
        @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
        @Inject(TUI_IS_CHROMIUM) private readonly isChromium: boolean,
        @Inject(TUI_IS_FIREFOX) private readonly isFirefox: boolean,
        @Inject(TUI_IS_WEBKIT) private readonly isWebkit: boolean,
        @Inject(ViewContainerRef) private readonly viewContainerRef: ViewContainerRef,
    ) {
        this.element.nativeElement.style.setProperty('opacity', '0');
    }

    ngAfterViewInit(): void {
        race(
            timer(TIMEOUT), // @note: firefox doesn't trigger load event when pdf doesn't open
            fromEvent(this.iframe, 'load'),
        )
            .pipe(
                map(() => this.hasPdfInsideIframe(this.iframe)),
                takeUntil(this.destroy$),
            )
            .subscribe(visible => {
                if (visible) {
                    this.iframe.style.setProperty('opacity', '1');
                } else {
                    this.iframe.style.setProperty('display', 'none');
                    this.viewContainerRef
                        .createEmbeddedView(this.tuiPdfFallback)
                        .detectChanges();
                }
            });
    }

    private get iframe(): HTMLIFrameElement {
        return this.element.nativeElement;
    }

    private hasPdfInsideIframe(iframe: HTMLIFrameElement): boolean {
        const contentWindow: Window = iframe.contentWindow || ({length: 0} as Window);

        if (this.isChromium) {
            /**
             * @note: in chrome, you can determine that a PDF
             * has loaded only by the number of frames inside
             */
            return contentWindow.length > 0;
        } else if (this.isFirefox) {
            /**
             * @note: in firefox in the blank window hasn't length/then fields
             */
            return 'length' in contentWindow && 'then' in contentWindow;
        } else if (this.isWebkit) {
            /**
             * @note: in safari/chrome ios in the blank window hasn't embedded element
             */
            return contentWindow.document.body.innerHTML.includes('embed');
        }

        return true;
    }
}
