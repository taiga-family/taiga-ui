import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    inject,
    Input,
} from '@angular/core';
import {CSS as CSS_TOKEN, USER_AGENT} from '@ng-web-apis/common';
import {TUI_IS_IOS, tuiGetElementOffset, tuiIsFirefox} from '@taiga-ui/cdk';
import {TUI_SCROLL_INTO_VIEW, TUI_SCROLLABLE} from '@taiga-ui/core/constants';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';

// TODO: Remove all legacy code in 4.0
@Component({
    selector: 'tui-scrollbar',
    templateUrl: './scrollbar.template.html',
    styleUrls: ['./scrollbar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_SCROLL_REF,
            deps: [TuiScrollbarComponent],
            useFactory: ({
                browserScrollRef,
            }: TuiScrollbarComponent): ElementRef<HTMLElement> => browserScrollRef,
        },
    ],
})
export class TuiScrollbarComponent {
    private readonly cssRef = inject(CSS_TOKEN);
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly userAgent = inject(USER_AGENT);
    private readonly isIOS = inject(TUI_IS_IOS);
    private readonly isLegacy: boolean =
        !this.cssRef.supports('position', 'sticky') ||
        (tuiIsFirefox(this.userAgent) &&
            !this.cssRef.supports('scrollbar-width', 'none'));

    @Input()
    public hidden = false;

    protected readonly browserScrollRef = new ElementRef(this.el);

    protected get delegated(): boolean {
        return this.browserScrollRef.nativeElement !== this.el;
    }

    protected get showScrollbars(): boolean {
        return !this.hidden && !this.isIOS && (!this.isLegacy || this.delegated);
    }

    @HostBinding('class._legacy')
    protected get showNative(): boolean {
        return this.isLegacy && !this.hidden && !this.delegated;
    }

    @HostListener(`${TUI_SCROLLABLE}.stop`, ['$event.detail'])
    protected onScrollable(element: HTMLElement): void {
        this.browserScrollRef.nativeElement = element;
    }

    @HostListener(`${TUI_SCROLL_INTO_VIEW}.stop`, ['$event.detail'])
    protected scrollIntoView(detail: HTMLElement): void {
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
