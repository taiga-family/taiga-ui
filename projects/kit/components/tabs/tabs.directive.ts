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
import {tuiIsHTMLElement, tuiMoveFocus} from '@taiga-ui/cdk';
import {Subject} from 'rxjs';

import {TUI_TAB_ACTIVATE} from './tab/tab.providers';

@Directive({
    selector: 'tui-tabs, nav[tuiTabs]',
})
export class TuiTabsDirective implements AfterViewChecked {
    @Input('activeItemIndex')
    set activeIndex(index: number) {
        this.activeItemIndex = index;
    }

    @Output()
    readonly activeItemIndexChange = new EventEmitter<number>();

    readonly checked = new Subject<void>();

    activeItemIndex = 0;

    constructor(@Inject(ElementRef) private readonly el: ElementRef<HTMLElement>) {}

    get tabs(): readonly HTMLElement[] {
        return Array.from(
            this.el.nativeElement.querySelectorAll<HTMLElement>('[tuiTab]'),
        );
    }

    get activeElement(): HTMLElement | null {
        return this.tabs[this.activeItemIndex] || null;
    }

    @HostListener(TUI_TAB_ACTIVATE, ['$event', '$event.target'])
    onActivate(event: Event, element: HTMLElement): void {
        const index = this.tabs.findIndex(tab => tab === element);

        event.stopPropagation();

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

            nativeElement.classList.toggle('_active', active);
            nativeElement.setAttribute('tabIndex', active ? '0' : '-1');
        });

        this.checked.next();
    }

    scrollToActiveItem(): void {
        const tab = this.activeElement;

        if (!tuiIsHTMLElement(tab)) {
            return;
        }

        const tabs = this.el.nativeElement;
        const horizontal =
            tab.offsetLeft + tab.offsetWidth > tabs.scrollLeft + tabs.offsetWidth ||
            tabs.scrollLeft > tab.offsetLeft;

        if (horizontal) {
            tabs.scrollLeft = tab.offsetLeft;
        }
    }
}
