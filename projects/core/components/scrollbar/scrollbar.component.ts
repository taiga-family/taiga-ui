import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostListener,
    inject,
    Input,
} from '@angular/core';
import {TUI_IS_IOS, tuiGetElementOffset, tuiInjectElement} from '@taiga-ui/cdk';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';

import {TuiScrollControlsComponent} from './scroll-controls.component';

/**
 * An event for scrolling an element into view within {@link TuiScrollbarComponent}.
 */
export const TUI_SCROLL_INTO_VIEW = 'tui-scroll-into-view';

/**
 * An event to notify {@link TuiScrollbarComponent} that
 * it should control a nested element.
 */
export const TUI_SCROLLABLE = 'tui-scrollable';

@Component({
    standalone: true,
    selector: 'tui-scrollbar',
    imports: [NgIf, TuiScrollControlsComponent],
    templateUrl: './scrollbar.template.html',
    styleUrls: ['./scrollbar.style.less'],
    host: {'[class._native-hidden]': '!isIOS || hidden'},
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_SCROLL_REF,
            useFactory: () => inject(TuiScrollbarComponent).browserScrollRef,
        },
    ],
})
export class TuiScrollbarComponent {
    private readonly el = tuiInjectElement();

    @Input()
    public hidden = false;

    protected readonly isIOS = inject(TUI_IS_IOS);

    protected readonly browserScrollRef = new ElementRef(this.el);

    protected get delegated(): boolean {
        return this.browserScrollRef.nativeElement !== this.el;
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

        nativeElement.scrollTo?.(scrollLeft, scrollTop);
    }
}
