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
    tuiRequiredSetter,
    TuiStaticRequestService,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {TUI_ICON_ERROR} from '@taiga-ui/core/constants';
import {TuiIconError} from '@taiga-ui/core/interfaces';
import {TuiSvgService} from '@taiga-ui/core/services';
import {TUI_SANITIZER} from '@taiga-ui/core/tokens';
import {tuiIsPresumedHTMLString} from '@taiga-ui/core/utils/miscellaneous';
import {Observable, of, ReplaySubject} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

import {TUI_SVG_OPTIONS, TuiSvgOptions} from './svg-options';

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
    private icon: SafeHtml | string = '';

    readonly innerHTML$: Observable<SafeHtml>;

    constructor(
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(WINDOW) private readonly win: Window,
        @Inject(TUI_SVG_OPTIONS) private readonly options: TuiSvgOptions,
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
    @tuiRequiredSetter()
    set src(src: SafeHtml | string) {
        const deprecated = this.options.deprecated(String(src));

        tuiAssert.assert(!deprecated, deprecated);
        this.icon = this.options.srcProcessor(src);
        this.src$.next();
    }

    get src(): SafeHtml | string {
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
        return this.use.includes('.svg#');
    }

    private get isExternal(): boolean {
        return this.isUrl || this.isCrossDomain;
    }

    private get isUrl(): boolean {
        return tuiIsString(this.icon) && this.icon.endsWith('.svg');
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

        tuiAssert.assert(false, message, icon);
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

    private sanitize(src: SafeHtml | string): SafeHtml | string {
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
