import {CommonModule} from '@angular/common';
import type {AfterViewChecked, AfterViewInit, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    inject,
    Input,
    Output,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import type {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiInjectElement, tuiIsElement} from '@taiga-ui/cdk/utils/dom';
import {tuiGetClosestFocusable, tuiIsNativeFocused} from '@taiga-ui/cdk/utils/focus';
import {tuiClamp, tuiToInt} from '@taiga-ui/cdk/utils/math';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiDropdown} from '@taiga-ui/core/directives/dropdown';
import type {TuiSizeL} from '@taiga-ui/core/types';
import {TuiChevron} from '@taiga-ui/kit/directives';
import {TUI_MORE_WORD} from '@taiga-ui/kit/tokens';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {filter, map, tap} from 'rxjs';

import {TuiTab} from './tab.directive';
import {TUI_TABS_OPTIONS} from './tabs.options';
import {TUI_TABS_PROVIDERS, TUI_TABS_REFRESH} from './tabs.providers';
import {TuiTabsHorizontal} from './tabs-horizontal.directive';

@Component({
    standalone: true,
    selector: 'tui-tabs-with-more, nav[tuiTabsWithMore]',
    imports: [
        CommonModule,
        PolymorpheusOutlet,
        TuiChevron,
        TuiDropdown,
        TuiTab,
        TuiTabsHorizontal,
    ],
    templateUrl: './tabs-with-more.template.html',
    styleUrls: ['./tabs-with-more.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_TABS_PROVIDERS,
    host: {
        '[attr.data-size]': 'size',
    },
})
export class TuiTabsWithMore implements AfterViewChecked, AfterViewInit {
    @ViewChild(TuiTab, {read: ElementRef})
    private readonly moreButton?: ElementRef<HTMLButtonElement>;

    @ViewChild(TuiTabsHorizontal, {read: ElementRef})
    private readonly dir?: ElementRef<HTMLButtonElement>;

    private readonly options = inject(TUI_TABS_OPTIONS);
    private readonly refresh$ = inject(TUI_TABS_REFRESH);
    private readonly el = tuiInjectElement();
    private readonly cdr = inject(ChangeDetectorRef);
    private maxIndex = Infinity;

    @ContentChildren(TuiItem, {read: TemplateRef})
    protected readonly items: QueryList<TemplateRef<Record<string, unknown>>> =
        EMPTY_QUERY;

    protected readonly moreWord$ = inject(TUI_MORE_WORD);
    protected open = false;

    @Input()
    public size: TuiSizeL = this.options.size;

    @Input()
    public moreContent: PolymorpheusContent;

    @Input()
    public dropdownContent: PolymorpheusContent<TuiContext<TuiActiveZone>>;

    @Input()
    public underline = this.options.underline;

    @Input()
    public itemsLimit = this.options.itemsLimit;

    @Output()
    public readonly activeItemIndexChange = new EventEmitter<number>();

    public activeItemIndex = 0;

    @Input('activeItemIndex')
    public set itemIndex(activeItemIndex: number) {
        this.activeItemIndex = activeItemIndex;
        this.maxIndex = this.getMaxIndex();
    }

    public get lastVisibleIndex(): number {
        if (this.itemsLimit + 1 >= this.items.length) {
            return this.maxIndex;
        }

        const offset =
            this.itemsLimit - 1 > this.activeItemIndex || !this.options.exposeActive
                ? 1
                : 2;

        return Math.min(this.itemsLimit - offset, this.maxIndex);
    }

    public ngAfterViewInit(): void {
        this.refresh$
            .pipe(
                map(() => this.getMaxIndex()),
                tap(() => this.refresh()),
                filter((maxIndex) => this.maxIndex !== maxIndex),
            )
            .subscribe((maxIndex) => {
                this.maxIndex = maxIndex;
                this.cdr.detectChanges();
            });
    }

    public ngAfterViewChecked(): void {
        this.refresh();
    }

    // TODO: Improve performance
    protected get tabs(): readonly HTMLElement[] {
        return Array.from<HTMLElement>(this.el.querySelectorAll('[tuiTab]'));
    }

    protected get activeElement(): HTMLElement | null {
        const {tabs} = this;
        const safeActiveIndex = tuiClamp(this.activeItemIndex || 0, 0, tabs.length - 2);

        return this.options.exposeActive || this.lastVisibleIndex >= safeActiveIndex
            ? tabs[safeActiveIndex] || null
            : this.moreButton?.nativeElement || null;
    }

    protected get isMoreAlone(): boolean {
        return this.lastVisibleIndex < 0 && !this.options.exposeActive;
    }

    protected get isMoreVisible(): boolean {
        return this.lastVisibleIndex < this.items.length - 1;
    }

    protected get isMoreFocusable(): boolean {
        return !!this.moreButton && tuiIsNativeFocused(this.moreButton.nativeElement);
    }

    protected get isMoreActive(): boolean {
        return (
            this.open ||
            (!this.options.exposeActive && this.lastVisibleIndex < this.activeItemIndex)
        );
    }

    protected onActiveItemIndexChange(activeItemIndex: number): void {
        this.updateActiveItemIndex(activeItemIndex);
    }

    protected onClick(index: number): void {
        this.open = false;
        this.focusMore();
        this.updateActiveItemIndex(index);
    }

    protected onArrowRight(event: Event): void {
        if (tuiIsElement(event.target) && tuiIsNativeFocused(event.target)) {
            this.focusMore();
        }
    }

    protected onArrowLeft(): void {
        const {tabs} = this;
        let index = tabs.length - 2;

        while (index >= 0) {
            tabs[index]?.focus();

            if (tuiIsNativeFocused(tabs[index])) {
                return;
            }

            index--;
        }
    }

    protected onWrapperArrow(
        event: Event,
        wrapper: HTMLElement,
        previous: boolean,
    ): void {
        const button: HTMLButtonElement = event.target as HTMLButtonElement;
        const target = tuiGetClosestFocusable({initial: button, root: wrapper, previous});

        if (target) {
            target.focus();
        }
    }

    protected isOverflown(index: number): boolean {
        return index !== this.activeItemIndex || !this.options.exposeActive;
    }

    protected shouldShow(index: number): boolean {
        return index > this.lastVisibleIndex && this.isOverflown(index);
    }

    private get margin(): number {
        return this.size === 'l' ? 24 : 16;
    }

    private focusMore(): void {
        if (this.moreButton) {
            this.moreButton.nativeElement.focus();
        }
    }

    private getMaxIndex(): number {
        const {tabs, activeItemIndex, margin} = this;

        if (tabs.length < 2) {
            return 0;
        }

        const {exposeActive, minMoreWidth} = this.options;
        const {clientWidth} = this.el;
        const active = tabs[activeItemIndex];
        const activeWidth = active?.scrollWidth ?? 0;
        const moreWidth = Math.max(tabs[tabs.length - 1]?.scrollWidth ?? 0, minMoreWidth);
        let maxIndex = tabs.length - 2;
        let total =
            tabs.reduce((acc, {scrollWidth}) => acc + scrollWidth, 0) +
            maxIndex * margin -
            (tabs[tabs.length - 1]?.scrollWidth ?? 0);

        if (Number.isNaN(total) || total <= clientWidth) {
            return Infinity;
        }

        while (maxIndex) {
            total -= (tabs[maxIndex]?.scrollWidth ?? 0) + margin;
            maxIndex--;

            const activeDisplaced = exposeActive && activeItemIndex > maxIndex;
            const activeOffset = activeDisplaced ? activeWidth + margin : 0;
            const currentWidth = total + activeOffset + moreWidth + margin;
            // Needed for different rounding of visible and hidden elements scrollWidth
            const safetyOffset = tuiToInt(this.maxIndex === maxIndex - 1);

            if (currentWidth + safetyOffset < clientWidth) {
                return maxIndex;
            }
        }

        return -1;
    }

    private updateActiveItemIndex(activeItemIndex: number): void {
        this.itemIndex = activeItemIndex;
        this.activeItemIndexChange.emit(activeItemIndex);
    }

    private refresh(): void {
        const {offsetLeft = 0, offsetWidth = 0} = this.activeElement || {};

        this.dir?.nativeElement.style.setProperty('--t-left', tuiPx(offsetLeft));
        this.dir?.nativeElement.style.setProperty('--t-width', tuiPx(offsetWidth));
    }
}
