import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
} from '@angular/core';
import {CSS, USER_AGENT} from '@ng-web-apis/common';
import {getElementOffset, isFirefox, tuiDefaultProp} from '@taiga-ui/cdk';
import {TUI_SCROLL_INTO_VIEW} from '@taiga-ui/core/constants';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {TuiScrollableDirective} from './scrollable.directive';

export function scrollRefFactory({
    browserScrollRef,
}: TuiScrollbarComponent): ElementRef<HTMLElement> {
    return browserScrollRef;
}

// @dynamic
@Component({
    selector: 'tui-scrollbar',
    templateUrl: './scrollbar.template.html',
    styleUrls: ['./scrollbar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_SCROLL_REF,
            deps: [TuiScrollbarComponent],
            useFactory: scrollRefFactory,
        },
    ],
})
export class TuiScrollbarComponent {
    @Input()
    @tuiDefaultProp()
    hidden = false;

    @HostBinding('class._container')
    @ContentChild(TuiScrollableDirective, {read: ElementRef})
    readonly scrollable?: ElementRef<HTMLDivElement>;

    private readonly isLegacy: boolean =
        !this.cssRef.supports('position', 'sticky') ||
        (isFirefox(this.userAgent) && !this.cssRef.supports('scrollbar-width', 'none'));

    constructor(
        /**
         * TODO: remove "any" in new TS version; https://github.com/ng-web-apis/common/pull/6
         */
        @Inject(CSS) private readonly cssRef: any,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(USER_AGENT) private readonly userAgent: string,
    ) {}

    get showScrollbars(): boolean {
        return !this.hidden && (!this.isLegacy || !!this.scrollable);
    }

    get browserScrollRef(): ElementRef<HTMLElement> {
        return this.scrollable || this.elementRef;
    }

    @HostBinding('class._legacy')
    get showNative(): boolean {
        return this.isLegacy && !this.hidden && !this.scrollable;
    }

    @HostListener(TUI_SCROLL_INTO_VIEW, ['$event'])
    scrollIntoView(event: CustomEvent<HTMLElement>) {
        const {detail} = event;
        const {nativeElement} = this.browserScrollRef;

        event.stopPropagation();

        const {offsetTop, offsetLeft} = getElementOffset(nativeElement, detail);

        nativeElement.scrollTop =
            offsetTop + detail.offsetHeight / 2 - nativeElement.clientHeight / 2;
        nativeElement.scrollLeft =
            offsetLeft + detail.offsetWidth / 2 - nativeElement.clientWidth / 2;
    }
}
