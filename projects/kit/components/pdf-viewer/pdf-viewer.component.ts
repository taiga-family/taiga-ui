import {AnimationOptions} from '@angular/animations';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostBinding,
    Inject,
} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {isFirefox, isSafari, TuiDestroyService, TuiDialog} from '@taiga-ui/cdk';
import {
    TUI_ANIMATION_OPTIONS,
    TUI_CLOSE_WORD,
    tuiFadeIn,
    tuiSlideInTop,
} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {fromEvent, Observable, race, timer} from 'rxjs';
import {filter, map, takeUntil} from 'rxjs/operators';

import {TuiPdfViewerOptions} from './pdf-viewer-options';

// @dynamic
@Component({
    selector: 'tui-pdf-viewer',
    templateUrl: './pdf-viewer.template.html',
    styleUrls: ['./pdf-viewer.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop, tuiFadeIn],
    providers: [TuiDestroyService],
})
export class TuiPdfViewerComponent<I, O> implements AfterViewInit {
    @HostBinding('@tuiSlideInTop')
    @HostBinding('@tuiFadeIn')
    readonly animation = {value: '', ...this.options} as const;

    emptyPreview = false;

    constructor(
        @Inject(TUI_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
        @Inject(TUI_CLOSE_WORD) readonly closeWord$: Observable<string>,
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiDialog<TuiPdfViewerOptions<I>, O>,
        @Inject(ElementRef)
        private readonly elementRef: ElementRef<Element>,
        @Inject(ChangeDetectorRef)
        private readonly cd: ChangeDetectorRef,
        @Inject(WINDOW)
        private readonly windowRef: Window & {chrome: unknown},
        @Inject(TuiDestroyService)
        private readonly destroy$: TuiDestroyService,
    ) {}

    ngAfterViewInit(): void {
        const iframe: HTMLIFrameElement | null =
            this.elementRef.nativeElement.querySelector('iframe');

        if (iframe) {
            race(timer(1000), fromEvent(iframe, 'load'))
                .pipe(
                    map(() => this.hasPdfInsideIframe(iframe)),
                    filter(pdfVisible => !pdfVisible),
                    takeUntil(this.destroy$),
                )
                .subscribe(() => {
                    // hide default preview (chrome/safari) for download pdf
                    iframe.style.setProperty('display', 'none');
                    this.emptyPreview = true;
                    this.cd.detectChanges();
                });
        }
    }

    private hasPdfInsideIframe(iframe: HTMLIFrameElement): boolean {
        const contentWindow: Window = iframe.contentWindow || ({length: 0} as Window);

        if (typeof this.windowRef.chrome !== 'undefined') {
            return contentWindow.length > 0;
        } else if (isFirefox(this.windowRef.navigator.userAgent)) {
            return 'length' in contentWindow && 'then' in contentWindow;
        } else if (isSafari(iframe)) {
            return contentWindow.document.body.innerHTML.includes('embed');
        }

        return iframeIsNotBlank(contentWindow);
    }
}

/**
 * @note: when browser try rendering a non-empty frame it cannot be accessed
 * `Permission denied to access property "document" on cross-origin object`
 *
 * otherwise we have access to Window:Blank
 */
function iframeIsNotBlank(contentWindow: Window): boolean {
    try {
        return !contentWindow.document;
    } catch {
        return true;
    }
}
