import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ElementRef,
    inject,
} from '@angular/core';
import {WA_IS_IOS} from '@ng-web-apis/platform';
import {tuiGetElementOffset, tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_TIMELINE_SUPPORT} from '@taiga-ui/core/tokens';

import {TuiScrollControls} from './scroll-controls.component';
import {TUI_SCROLL_REF, TuiScrollRef} from './scroll-ref.directive';
import {TUI_SCROLLBAR_OPTIONS} from './scrollbar.options';

/**
 * An event for scrolling an element into view within {@link TuiScrollbar}.
 */
export const TUI_SCROLL_INTO_VIEW = 'tui-scroll-into-view';

/**
 * An event to notify {@link TuiScrollbar} that
 * it should control a nested element.
 */
export const TUI_SCROLLABLE = 'tui-scrollable';

/**
 * @deprecated
 * Cannot put it into viewProviders because of https://github.com/angular/angular/issues/65724
 * Cannot put it into providers because it shouldn't leak to content
 * TODO: Remove in v6 together with {@link TuiScrollable}
 */
@Directive({
    selector: '[tuiDelegateGuard]',
    providers: [
        {
            provide: TUI_TIMELINE_SUPPORT,
            useFactory: () =>
                inject(TUI_TIMELINE_SUPPORT, {skipSelf: true}) &&
                !inject(TuiScrollbar).delegated,
        },
    ],
})
class TuiDelegatedGuard {}

@Component({
    selector: 'tui-scrollbar',
    imports: [TuiDelegatedGuard, TuiScrollControls],
    templateUrl: './scrollbar.template.html',
    styleUrl: './scrollbar.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_SCROLL_REF,
            useFactory: () => inject(TuiScrollbar).browserScrollRef,
        },
    ],
    hostDirectives: [TuiScrollRef],
    host: {
        '[class._native]':
            'options.mode === "native" || (isIOS && options.mode !== "hidden")',
        [`(${TUI_SCROLLABLE}.stop)`]: 'scrollRef = $event.detail',
        [`(${TUI_SCROLL_INTO_VIEW}.stop)`]: 'scrollIntoView($event.detail)',
    },
})
export class TuiScrollbar {
    private readonly el = tuiInjectElement();

    protected readonly options = inject(TUI_SCROLLBAR_OPTIONS);
    protected readonly isIOS = inject(WA_IS_IOS);
    protected readonly browserScrollRef = new ElementRef(this.el);

    public get delegated(): boolean {
        return this.scrollRef !== this.el || this.options.mode === 'native';
    }

    protected get scrollRef(): HTMLElement {
        return this.browserScrollRef.nativeElement;
    }

    protected set scrollRef(element: HTMLElement) {
        this.browserScrollRef.nativeElement = element;
    }

    protected scrollIntoView(detail: HTMLElement): void {
        if (this.delegated) {
            return;
        }

        const {offsetHeight, offsetWidth} = detail;
        const {offsetTop, offsetLeft} = tuiGetElementOffset(this.scrollRef, detail);
        const scrollTop = offsetTop + offsetHeight / 2 - this.scrollRef.clientHeight / 2;
        const scrollLeft = offsetLeft + offsetWidth / 2 - this.scrollRef.clientWidth / 2;

        this.scrollRef.scrollTo?.(scrollLeft, scrollTop);
    }
}
