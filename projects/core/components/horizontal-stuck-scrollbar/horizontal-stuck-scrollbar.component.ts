import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    ViewChild,
} from '@angular/core';
import {CSS as CSS_TOKEN, USER_AGENT} from '@ng-web-apis/common';
import {
    TUI_IS_IOS,
    tuiGetElementOffset,
    TuiInjectionTokenType,
    tuiIsFirefox,
} from '@taiga-ui/cdk';
import {TUI_SCROLL_INTO_VIEW, TUI_SCROLL_REF, TUI_SCROLLABLE} from '@taiga-ui/core';

@Component({
    selector: 'tui-horizontal-stuck-scrollbar',
    templateUrl: './horizontal-stuck-scrollbar.template.html',
    styleUrls: ['./horizontal-stuck-scrollbar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_SCROLL_REF,
            deps: [TuiHorizontalStuckScrollbarComponent],
            useFactory: (
                component: TuiHorizontalStuckScrollbarComponent,
            ): ElementRef<HTMLElement> => ({
                get nativeElement(): HTMLElement {
                    return component.browserScrollRef.nativeElement;
                },
            }),
        },
    ],
})
export class TuiHorizontalStuckScrollbarComponent {
    private delegated = false;

    private readonly isLegacy: boolean =
        !this.cssRef.supports('position', 'sticky') ||
        (tuiIsFirefox(this.userAgent) &&
            !this.cssRef.supports('scrollbar-width', 'none'));

    @Input()
    hidden = false;

    @ViewChild('scrollRef', {read: ElementRef})
    readonly browserScrollRef!: ElementRef<HTMLElement>;

    constructor(
        @Inject(CSS_TOKEN)
        private readonly cssRef: TuiInjectionTokenType<typeof CSS_TOKEN>,
        @Inject(USER_AGENT) private readonly userAgent: string,
        @Inject(TUI_IS_IOS) private readonly isIos: boolean,
    ) {}

    get showScrollbars(): boolean {
        return !this.hidden && !this.isIos && (!this.isLegacy || this.delegated);
    }

    @HostBinding('class._legacy')
    get showNative(): boolean {
        return this.isLegacy && !this.hidden && !this.delegated;
    }

    @HostListener(`${TUI_SCROLLABLE}.stop`, ['$event.detail'])
    onScrollable(element: HTMLElement): void {
        this.delegated = true;
        this.browserScrollRef.nativeElement = element;
    }

    @HostListener(`${TUI_SCROLL_INTO_VIEW}.stop`, ['$event.detail'])
    scrollIntoView(detail: HTMLElement): void {
        if (this.delegated) {
            return;
        }

        const {nativeElement} = this.browserScrollRef;
        const {offsetTop, offsetLeft} = tuiGetElementOffset(nativeElement, detail);
        const {clientHeight, clientWidth} = nativeElement;
        const {offsetHeight, offsetWidth} = detail;
        const scrollTop = offsetTop + offsetHeight / 2 - clientHeight / 2;
        const scrollLeft = offsetLeft + offsetWidth / 2 - clientWidth / 2;

        // ?. for our clients on Windows XP and Chrome 49
        nativeElement.scrollTo?.(scrollLeft, scrollTop);
    }
}
