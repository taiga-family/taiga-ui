import {ChangeDetectionStrategy, Component, ElementRef, inject} from '@angular/core';
import {TUI_RTL_SELECTOR} from '@taiga-ui/cdk/constants';
import {tuiGetElementOffset, tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_ANCHOR_SUPPORT} from '@taiga-ui/core/tokens';

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

@Component({
    selector: 'tui-scrollbar',
    imports: [TuiScrollControls],
    template: `
        <tui-scroll-controls class="t-scrollbar" />
        <div class="t-content"><ng-content /></div>
    `,
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
        '[class._scrollbar-anchored]': 'anchored',
        '[class._delegated]': 'delegated',
        '[class._hover]': "mode === 'hover'",
        [`(${TUI_SCROLLABLE}.stop)`]: 'scrollRef = $event.detail',
        [`(${TUI_SCROLL_INTO_VIEW}.stop)`]: 'scrollIntoView($event.detail)',
    },
})
export class TuiScrollbar {
    protected readonly anchored = inject(TUI_ANCHOR_SUPPORT);
    protected readonly el = tuiInjectElement();
    protected readonly mode = inject(TUI_SCROLLBAR_OPTIONS).mode;
    protected readonly browserScrollRef = new ElementRef(this.el);

    public get delegated(): boolean {
        return this.scrollRef !== this.el || this.mode === 'native';
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
        const {clientHeight, clientWidth} = this.scrollRef;
        const scrollTop = offsetTop + offsetHeight / 2 - clientHeight / 2;
        // `offsetLeft` is measured from the left edge of the host while the scroll
        // position is measured from the start edge, which is the right edge in RTL.
        // The target can sit left of the host edge (negative `offsetLeft`) when the
        // content overflows, so the distance from the start edge is derived from
        // `clientWidth`, not `scrollWidth`.
        const center = offsetLeft + offsetWidth / 2;
        const direction = this.scrollRef.matches(TUI_RTL_SELECTOR) ? -1 : 1;
        const scrollLeft =
            direction === -1 ? clientWidth / 2 - center : center - clientWidth / 2;

        this.scrollRef.scrollTo?.(direction * scrollLeft, scrollTop);
    }
}
