import {
    afterNextRender,
    type AfterViewChecked,
    ChangeDetectionStrategy,
    Component,
    Directive,
    EventEmitter,
    inject,
    INJECTOR,
    Input,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiMoveFocus} from '@taiga-ui/cdk/utils/focus';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiSizeL} from '@taiga-ui/core/types';

import {TUI_TAB_ACTIVATE} from './tab.directive';
import {TUI_TABS_OPTIONS} from './tabs.options';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./tabs.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-tabs',
    },
})
class TuiTabsStyles {}

@Directive({
    standalone: true,
    host: {
        tuiTabsV: TUI_VERSION,
        '[attr.data-size]': 'size',
        [`(${TUI_TAB_ACTIVATE})`]: 'onActivate($event, $event.target)',
    },
})
export class TuiTabsDirective implements AfterViewChecked {
    private readonly el = tuiInjectElement();
    private readonly injector = inject(INJECTOR);
    private marked: readonly HTMLElement[] | null = null;
    private markedIndex = -1;

    protected readonly nothing = tuiWithStyles(TuiTabsStyles);

    @Input()
    public size: TuiSizeL = inject(TUI_TABS_OPTIONS).size;

    @Input()
    public activeItemIndex = 0;

    @Output()
    public readonly activeItemIndexChange = new EventEmitter<number>();

    public get tabs(): readonly HTMLElement[] {
        return Array.from(this.el.querySelectorAll<HTMLElement>('[tuiTab]'));
    }

    public get activeElement(): HTMLElement | null {
        return this.tabs[this.activeItemIndex] || null;
    }

    public moveFocus(current: HTMLElement, step: number): void {
        const {tabs} = this;

        tuiMoveFocus(tabs.indexOf(current), tabs, step);
    }

    public ngAfterViewChecked(): void {
        afterNextRender(
            () => {
                this.syncActiveItemIndex();
                this.markTabAsActive();
            },
            {injector: this.injector},
        );
    }

    protected onActivate(event: Event, element: HTMLElement): void {
        const index = this.tabs.findIndex((tab) => tab === element);

        event.stopPropagation();

        if (index === -1) {
            return;
        }

        this.marked = null;

        if (index !== this.activeItemIndex) {
            this.activeItemIndexChange.emit(index);
            this.activeItemIndex = index;
        }
    }

    protected markTabAsActive(): void {
        const {tabs, activeElement} = this;

        tabs.forEach((nativeElement) => {
            const active = nativeElement === activeElement;

            nativeElement.classList.toggle('_active', active);
            nativeElement.setAttribute('tabIndex', active ? '0' : '-1');
        });

        this.marked = tabs;
        this.markedIndex = this.activeItemIndex;
    }

    // Index becomes stale when tabs are added or removed, so the element marked on the previous pass wins
    private syncActiveItemIndex(): void {
        const {tabs} = this;
        const isSame =
            tabs.length === this.marked?.length &&
            tabs.every((tab, i) => tab === this.marked?.[i]);

        // The model is written from outside when it no longer matches the last mark
        if (!this.marked || isSame || this.activeItemIndex !== this.markedIndex) {
            return;
        }

        const index = tabs.findIndex((tab) => tab.classList.contains('_active'));

        if (index !== -1 && index !== this.activeItemIndex) {
            this.activeItemIndexChange.emit(index);
            this.activeItemIndex = index;
        }
    }
}
