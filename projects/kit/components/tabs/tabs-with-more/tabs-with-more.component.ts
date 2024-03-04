import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    HostBinding,
    inject,
    Input,
    Output,
    type QueryList,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {
    EMPTY_QUERY,
    type TuiActiveZoneDirective,
    tuiClamp,
    type TuiContext,
    tuiGetClosestFocusable,
    tuiIsElement,
    tuiIsNativeFocused,
    TuiItemDirective,
    tuiToInt,
} from '@taiga-ui/cdk';
import {TUI_ARROW_OPTIONS} from '@taiga-ui/kit/components/arrow';
import {TUI_MORE_WORD, TUI_TAB_MARGIN} from '@taiga-ui/kit/tokens';
import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {filter, map} from 'rxjs';

import {TuiTabComponent} from '../tab/tab.component';
import {TUI_TABS_OPTIONS} from '../tabs.options';
import {TUI_TABS_PROVIDERS, TUI_TABS_REFRESH} from './tabs-with-more.providers';

@Component({
    selector: 'tui-tabs-with-more, nav[tuiTabsWithMore]',
    templateUrl: './tabs-with-more.template.html',
    styleUrls: ['./tabs-with-more.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_TABS_PROVIDERS,
})
export class TuiTabsWithMoreComponent implements AfterViewInit {
    @ViewChild(TuiTabComponent, {read: ElementRef})
    private readonly moreButton?: ElementRef<HTMLButtonElement>;

    private readonly options = inject(TUI_TABS_OPTIONS);
    private readonly margin = inject(TUI_TAB_MARGIN);
    private readonly refresh$ = inject(TUI_TABS_REFRESH);
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly cdr = inject(ChangeDetectorRef);
    private maxIndex = Infinity;

    @Input()
    public moreContent: PolymorpheusContent;

    @Input()
    public dropdownContent: PolymorpheusContent<TuiContext<TuiActiveZoneDirective>>;

    @Input()
    @HostBinding('class._underline')
    public underline = this.options.underline;

    @Input()
    public itemsLimit = this.options.itemsLimit;

    @Output()
    public readonly activeItemIndexChange = new EventEmitter<number>();

    public activeItemIndex = 0;

    @ContentChildren(TuiItemDirective, {read: TemplateRef})
    protected readonly items: QueryList<TemplateRef<Record<string, unknown>>> =
        EMPTY_QUERY;

    protected readonly moreWord$ = inject(TUI_MORE_WORD);
    protected readonly arrowOptions = inject(TUI_ARROW_OPTIONS);
    protected open = false;

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
                filter(maxIndex => this.maxIndex !== maxIndex),
            )
            .subscribe(maxIndex => {
                this.maxIndex = maxIndex;
                this.cdr.detectChanges();
            });
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
            tabs[index].focus();

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
        const activeWidth = tabs[activeItemIndex] ? tabs[activeItemIndex].scrollWidth : 0;
        const moreWidth = Math.max(tabs[tabs.length - 1].scrollWidth, minMoreWidth);
        let maxIndex = tabs.length - 2;
        let total =
            tabs.reduce((acc, {scrollWidth}) => acc + scrollWidth, 0) +
            maxIndex * margin -
            tabs[tabs.length - 1].scrollWidth;

        if (total <= clientWidth) {
            return Infinity;
        }

        while (maxIndex) {
            total -= tabs[maxIndex].scrollWidth + margin;
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
}
