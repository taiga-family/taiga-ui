/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    Input,
    SecurityContext,
} from '@angular/core';
import type {SafeHtml} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {WINDOW} from '@ng-web-apis/common';
import type {TuiSafeHtml} from '@taiga-ui/cdk';
import {
    TUI_BASE_HREF,
    tuiAssert,
    tuiGetDocumentOrShadowRoot,
    tuiIsString,
    tuiPure,
    TuiStaticRequestService,
} from '@taiga-ui/cdk';
import {TUI_CACHE_BUSTING_PAYLOAD, TUI_ICON_ERROR} from '@taiga-ui/core/constants';
import type {TuiIconError} from '@taiga-ui/core/interfaces';
import {TuiSvgService} from '@taiga-ui/core/services';
import {TUI_SANITIZER} from '@taiga-ui/core/tokens';
import {tuiIsPresumedHTMLString} from '@taiga-ui/core/utils/miscellaneous';
import type {Observable} from 'rxjs';
import {catchError, map, of, ReplaySubject, startWith, switchMap} from 'rxjs';

import type {TuiSvgInterceptorHandler, TuiSvgOptions} from './svg-options';
import {TUI_SVG_OPTIONS, TUI_SVG_SRC_INTERCEPTORS} from './svg-options';

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
    private icon: TuiSafeHtml = '';
    private readonly doc = inject(DOCUMENT);
    private readonly win = inject(WINDOW);
    private readonly options = inject(TUI_SVG_OPTIONS);
    private readonly tuiSanitizer = inject(TUI_SANITIZER, {optional: true});
    private readonly svgService = inject(TuiSvgService);
    private readonly staticRequestService = inject(TuiStaticRequestService);
    private readonly sanitizer = inject(DomSanitizer);
    private readonly el: Element = inject(ElementRef).nativeElement;
    private readonly baseHref = inject(TUI_BASE_HREF);
    private readonly src$ = new ReplaySubject<void>(1);
    private readonly srcInterceptors = inject(TUI_SVG_SRC_INTERCEPTORS, {
        optional: true,
    }) as readonly TuiSvgInterceptorHandler[] | null;

    protected readonly innerHTML$: Observable<SafeHtml>;

    constructor() {
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
    public set src(src: TuiSafeHtml | null | undefined) {
        const deprecated = this.options.deprecated(String(src));

        ngDevMode && tuiAssert.assert(!deprecated, deprecated);

        this.icon = (this.srcInterceptors ?? []).reduce(
            (newSrc, interceptor: TuiSvgInterceptorHandler) =>
                interceptor(newSrc, this.options),
            this.options.srcProcessor(src || ''),
        );

        this.src$.next();
    }

    public get src(): TuiSafeHtml {
        return this.icon;
    }

    public get use(): string {
        if (tuiIsString(this.icon)) {
            return this.icon.includes('.svg#')
                ? this.icon
                : this.resolveName(this.icon, this.options.path);
        }

        return '';
    }

    public get isInnerHTML(): boolean {
        return (
            !tuiIsString(this.icon) ||
            this.isSrc ||
            this.isExternal ||
            (this.isName && this.isShadowDOM)
        );
    }

    protected onError(message: string = MISSING_EXTERNAL_ICON): void {
        const {icon} = this;
        const event = new CustomEvent<TuiIconError>(TUI_ICON_ERROR, {
            bubbles: true,
            detail: {
                message,
                icon: icon as string,
            },
        });

        ngDevMode && tuiAssert.assert(false, message, icon);
        this.el.dispatchEvent(event);
    }

    private get isShadowDOM(): boolean {
        return tuiGetDocumentOrShadowRoot(this.el) !== this.doc;
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

    @tuiPure
    private resolveName(name: string, iconsPath: TuiSvgOptions['path']): string {
        return iconsPath(name, this.baseHref);
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
