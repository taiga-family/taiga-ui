import {
    AfterViewChecked,
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    NgZone,
    OnDestroy,
    Output,
} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiDefaultProp, tuiIsHTMLElement, tuiMoveFocus} from '@taiga-ui/cdk';

import {TUI_TAB_ACTIVATE} from './tab/tab.providers';

@Directive({
    selector: `tui-tabs, nav[tuiTabs]`,
})
export class TuiTabsDirective implements AfterViewChecked, OnDestroy {
    private scrollingId = 0;

    @Input(`activeItemIndex`)
    set activeIndex(index: number) {
        this.activeItemIndex = index;

        if (this.autoScroll) {
            this.safelyScrollToActiveElement();
        }
    }

    @Input()
    @tuiDefaultProp()
    autoScroll = false;

    @Input()
    @tuiDefaultProp()
    autoScrollTimeout = 500;

    @Output()
    readonly activeItemIndexChange = new EventEmitter<number>();

    activeItemIndex = 0;

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(WINDOW) private readonly windowRef: Window,
    ) {}

    get tabs(): readonly HTMLElement[] {
        return Array.from(
            this.elementRef.nativeElement.querySelectorAll<HTMLElement>(`[tuiTab]`),
        );
    }

    get activeElement(): HTMLElement | null {
        return this.tabs[this.activeItemIndex] || null;
    }

    @HostListener(`${TUI_TAB_ACTIVATE}.stop`, [`$event.target`])
    onActivate(element: HTMLElement): void {
        const index = this.tabs.findIndex(tab => tab === element);

        if (index === this.activeItemIndex) {
            return;
        }

        this.activeItemIndexChange.emit(index);
        this.activeItemIndex = index;
    }

    moveFocus(current: HTMLElement, step: number): void {
        const {tabs} = this;

        tuiMoveFocus(tabs.indexOf(current), tabs, step);
    }

    ngAfterViewChecked(): void {
        const {tabs, activeElement} = this;

        tabs.forEach(nativeElement => {
            const active = nativeElement === activeElement;

            nativeElement.classList.toggle(`_active`, active);
            nativeElement.setAttribute(`tabIndex`, active ? `0` : `-1`);
        });
    }

    ngOnDestroy(): void {
        this.windowRef.clearInterval(this.scrollingId);
    }

    private safelyScrollToActiveElement(): void {
        this.ngZone.runOutsideAngular(() => {
            this.windowRef.clearTimeout(this.scrollingId);
            this.scrollingId = this.windowRef.setTimeout(
                () => this.scrollToVisibleAreaActiveElement(),
                this.autoScrollTimeout,
            );
        });
    }

    private scrollToVisibleAreaActiveElement(): void {
        const element = this.activeElement;

        if (!tuiIsHTMLElement(element)) {
            return;
        }

        const parent =
            element.parentElement && this.isScrollable(element.parentElement)
                ? element.parentElement
                : this.findScrollableParent(element);

        if (!tuiIsHTMLElement(parent)) {
            return;
        }

        const invisibleInTopArea =
            element.offsetTop > parent.offsetHeight + parent.scrollTop ||
            element.scrollTop + element.offsetHeight <= parent.scrollTop;
        const invisibleInLeftArea =
            element.offsetLeft > parent.offsetWidth + parent.scrollLeft;

        if (invisibleInTopArea) {
            parent.scrollTop = element.offsetTop;
        }

        if (invisibleInLeftArea) {
            parent.scrollLeft = element.offsetLeft;
        }
    }

    private isScrollable(element: HTMLElement): boolean {
        const hasScrollableContent =
            element.scrollHeight > element.clientHeight ||
            element.scrollWidth > element.clientWidth;
        const overflowYStyle = this.windowRef.getComputedStyle(element).overflowY;
        const isOverflowHidden = overflowYStyle.includes(`hidden`);

        return hasScrollableContent && !isOverflowHidden;
    }

    private findScrollableParent(element: HTMLElement): HTMLElement {
        if (!element || element === this.windowRef.document.body) {
            return this.windowRef.document.body;
        }

        if (this.isScrollable(element)) {
            return element;
        }

        return this.findScrollableParent(
            (element as unknown as Node)?.parentNode as HTMLElement,
        );
    }
}
