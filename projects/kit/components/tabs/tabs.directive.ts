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
import {tuiDefaultProp, tuiMoveFocus} from '@taiga-ui/cdk';

import {TUI_TAB_ACTIVATE} from './tab/tab.providers';

@Directive({
    selector: `tui-tabs, nav[tuiTabs]`,
})
export class TuiTabsDirective implements AfterViewChecked {
    @Input()
    @tuiDefaultProp()
    activeItemIndex = 0;

    @Output()
    readonly activeItemIndexChange = new EventEmitter<number>();

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
    }
}
