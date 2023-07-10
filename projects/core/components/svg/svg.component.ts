import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    Input,
    Optional,
    Sanitizer,
    SecurityContext,
} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {WINDOW} from '@ng-web-apis/common';
import {
    tuiAssert,
    tuiGetDocumentOrShadowRoot,
    tuiIsString,
    tuiPure,
    TuiSafeHtml,
    TuiStaticRequestService,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {TUI_CACHE_BUSTING_PAYLOAD, TUI_ICON_ERROR} from '@taiga-ui/core/constants';
import {TuiIconError} from '@taiga-ui/core/interfaces';
import {TuiSvgService} from '@taiga-ui/core/services';
import {TUI_SANITIZER} from '@taiga-ui/core/tokens';
import {tuiIsPresumedHTMLString} from '@taiga-ui/core/utils/miscellaneous';
import {Observable, of, ReplaySubject} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

import {
    TUI_SVG_OPTIONS,
    TUI_SVG_SRC_INTERCEPTORS,
    TuiSvgInterceptorHandler,
    TuiSvgOptions,
} from './svg-options';

const UNDEFINED_NAMED_ICON = 'Attempted to use undefined named icon';
const MISSING_EXTERNAL_ICON = 'External icon is missing on the given URL';
const FAILED_EXTERNAL_ICON = 'Failed to load external SVG';

// TODO: Consider moving to CDK along with SvgService and SvgDefsHostComponent
@Component({
    selector: 'tui-svg',
    templateUrl: './svg.template.html',
    styleUrls: ['./svg.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSvgComponent {
    private readonly src$ = new ReplaySubject<void>(1);
    private icon: TuiSafeHtml = '';

    readonly innerHTML$: Observable<SafeHtml>;

    constructor(
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(WINDOW) private readonly win: Window,
        @Inject(TUI_SVG_OPTIONS) private readonly options: TuiSvgOptions,
        @Optional()
        @Inject(TUI_SVG_SRC_INTERCEPTORS)
        private readonly srcInterceptors: readonly TuiSvgInterceptorHandler[] | null,
        @Optional()
        @Inject(TUI_SANITIZER)
        private readonly tuiSanitizer: Sanitizer | null,
        @Inject(TuiSvgService) private readonly svgService: TuiSvgService,
        @Inject(TuiStaticRequestService)
        private readonly staticRequestService: TuiStaticRequestService,
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Inject(ElementRef) private readonly el: ElementRef<Element>,
    ) {
        this.innerHTML$ = this.src$.pipe(
            switchMap(() => {
                if (tuiIsString(this.icon)) {
                    return this.isExternal
                        ? this.getExternalIcon(this.icon)
                        : of(this.getSafeHtml(this.icon));
                }

                return of(this.icon);
            }),
            startWith(''),
        );
    }

    @Input()
    set src(src: TuiSafeHtml | null | undefined) {
        const deprecated = this.options.deprecated(String(src));

        ngDevMode && tuiAssert.assert(!deprecated, deprecated);

        this.icon = (this.srcInterceptors ?? []).reduce(
            (newSrc, interceptor: TuiSvgInterceptorHandler) =>
                interceptor(newSrc, this.options),
            this.options.srcProcessor(src || ''),
        );

        this.src$.next();
    }

    get src(): TuiSafeHtml {
        return this.icon;
    }

    get use(): string {
        if (tuiIsString(this.icon)) {
            return this.icon.includes('.svg#')
                ? this.icon
                : this.resolveName(this.icon, this.options.path);
        }

        return '';
    }

    get isInnerHTML(): boolean {
        return (
            !tuiIsString(this.icon) ||
            this.isSrc ||
            this.isExternal ||
            (this.isName && this.isShadowDOM)
        );
    }

    private get isShadowDOM(): boolean {
        return tuiGetDocumentOrShadowRoot(this.el.nativeElement) !== this.doc;
    }

    private get isUse(): boolean {
        return this.use.replace(TUI_CACHE_BUSTING_PAYLOAD, '').includes('.svg#');
    }

    private get isExternal(): boolean {
        return this.isUrl || this.isCrossDomain;
    }

    private get isUrl(): boolean {
        return (
            tuiIsString(this.icon) &&
            this.icon.replace(TUI_CACHE_BUSTING_PAYLOAD, '').endsWith('.svg')
        );
    }

    private get isSrc(): boolean {
        return tuiIsString(this.icon) && tuiIsPresumedHTMLString(this.icon);
    }

    private get isName(): boolean {
        return !this.isUrl && !this.isUse && !this.isSrc;
    }

    private get isCrossDomain(): boolean {
        const {use, isUse, win} = this;

        return (
            isUse && use.startsWith('http') && !!win.origin && !use.startsWith(win.origin)
        );
    }

    onError(message: string = MISSING_EXTERNAL_ICON): void {
        const {icon} = this;
        const event = new CustomEvent<TuiIconError>(TUI_ICON_ERROR, {
            bubbles: true,
            detail: {
                message,
                icon: icon as string,
            },
        });

        ngDevMode && tuiAssert.assert(false, message, icon);
        this.el.nativeElement.dispatchEvent(event);
    }

    @tuiPure
    private resolveName(name: string, iconsPath: TuiStringHandler<string>): string {
        return iconsPath(name);
    }

    private getSafeHtml(src: string): SafeHtml {
        return this.isSrc ? this.sanitize(src) : this.process(src);
    }

    private process(src: string): SafeHtml {
        const icon = this.svgService.getOriginal(src);

        if (this.isName && !icon && !!src) {
            this.onError(UNDEFINED_NAMED_ICON);
        }

        // Empty line for innerHTML when icon is shown through USE tag
        return !this.isShadowDOM || !this.isName ? '' : this.sanitize(icon || '');
    }

    private sanitize(src: TuiSafeHtml): TuiSafeHtml {
        src = this.options.contentProcessor(src);

        return this.tuiSanitizer && tuiIsString(src)
            ? this.sanitizer.bypassSecurityTrustHtml(
                  this.tuiSanitizer.sanitize(SecurityContext.HTML, src) || '',
              )
            : src;
    }

    private getExternalIcon(src: string): Observable<SafeHtml> {
        const url = src.includes('.svg') ? src : this.use;

        return this.staticRequestService.request(url).pipe(
            catchError(() => {
                this.onError(FAILED_EXTERNAL_ICON);

                return of('');
            }),
            map(response =>
                this.sanitize(response.replace('<svg', '<svg focusable="false"')),
            ),
        );
    }
}
