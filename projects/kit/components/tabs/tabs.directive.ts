import {
    AfterViewChecked,
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {tuiDefaultProp, tuiIsHTMLElement, tuiMoveFocus} from '@taiga-ui/cdk';

import {TUI_TAB_ACTIVATE} from './tab/tab.providers';

@Directive({
    selector: `tui-tabs, nav[tuiTabs]`,
})
export class TuiTabsDirective implements AfterViewChecked {
    private autoScrollPositionDirty = false;

    @Input(`activeItemIndex`)
    set activeIndex(index: number) {
        this.activeItemIndex = index;

        if (this.autoScroll) {
            this.autoScrollPositionDirty = true;
        }
    }

    @Input()
    @tuiDefaultProp()
    autoScroll = false;

    @Output()
    readonly activeItemIndexChange = new EventEmitter<number>();

    activeItemIndex = 0;

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
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

        this.safelyScrollToActiveElement();
    }

    private safelyScrollToActiveElement(): void {
        const needUpdatePositionByAutoscroll =
            this.autoScroll &&
            this.autoScrollPositionDirty &&
            this.activeElement?.offsetLeft;

        if (needUpdatePositionByAutoscroll) {
            this.scrollToVisibleAreaActiveElement();
            this.autoScrollPositionDirty = false;
        }
    }

    private scrollToVisibleAreaActiveElement(): void {
        const tab = this.activeElement;

        if (!tuiIsHTMLElement(tab)) {
            return;
        }

        const tabs = this.elementRef.nativeElement;
        const invisibleInAreaTabs =
            tab.offsetLeft + tab.offsetWidth > tabs.scrollLeft + tabs.offsetWidth ||
            tabs.scrollLeft > tab.offsetLeft;

        if (invisibleInAreaTabs) {
            tabs.scrollLeft = tab.offsetLeft;
        }
    }
}
