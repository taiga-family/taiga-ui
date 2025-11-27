import {ChangeDetectionStrategy, Component, ElementRef, inject} from '@angular/core';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {tuiGetElementOffset, tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

import {TuiScrollControls} from './scroll-controls.component';
import {TUI_SCROLL_REF} from './scroll-ref.directive';
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
    templateUrl: './scrollbar.template.html',
    styleUrl: './scrollbar.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_SCROLL_REF,
            useFactory: () => inject(TuiScrollbar).browserScrollRef,
        },
    ],
    host: {
        '[class._native-hidden]': 'options.mode !== "native" && !isIOS',
        [`(${TUI_SCROLLABLE}.stop)`]: 'scrollRef = $event.detail',
        [`(${TUI_SCROLL_INTO_VIEW}.stop)`]: 'scrollIntoView($event.detail)',
    },
})
export class TuiScrollbar {
    private readonly el = tuiInjectElement();

    protected readonly options = inject(TUI_SCROLLBAR_OPTIONS);
    protected readonly isIOS = inject(TUI_IS_IOS);
    protected readonly browserScrollRef = new ElementRef(this.el);

    protected get delegated(): boolean {
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
