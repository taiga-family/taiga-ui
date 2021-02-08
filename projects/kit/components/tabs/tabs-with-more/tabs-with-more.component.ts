import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    Output,
    QueryList,
    Renderer2,
    ViewChild,
} from '@angular/core';
import {
    EMPTY_QUERY,
    getClosestKeyboardFocusable,
    isNativeFocused,
    setNativeFocused,
    tuiDefaultProp,
    tuiPure,
    tuiRequiredSetter,
} from '@taiga-ui/cdk';
import {TUI_MORE_WORD} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {filter, map, startWith} from 'rxjs/operators';
import {TuiTabDirective} from '../tab.directive';
import {TuiTabComponent} from '../tab/tab.component';
import {TAB_ACTIVE_CLASS, TAB_MARGIN} from '../tabs.const';
import {TABS_PROVIDERS, TABS_REFRESH} from './tabs-with-more.providers';

// @dynamic
@Component({
    selector: 'tui-tabs-with-more, nav[tuiTabsWithMore]',
    templateUrl: './tabs-with-more.template.html',
    styleUrls: ['./tabs-with-more.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TABS_PROVIDERS,
})
export class TuiTabsWithMoreComponent implements AfterViewInit {
    @Input()
    @tuiDefaultProp()
    moreContent: PolymorpheusContent = '';

    @Input()
    @HostBinding('class._underline')
    @tuiDefaultProp()
    underline = true;

    @Input()
    @tuiDefaultProp()
    activeItemIndex = 0;

    @Input('itemsLimit')
    @tuiRequiredSetter()
    set itemsLimitSetter(itemsLimit: number) {
        this.itemsLimit = itemsLimit;
        this.lastVisibleIndex = this.getLastVisibleIndex();
    }

    @Output()
    readonly activeItemIndexChange = new EventEmitter<number>();

    @ContentChildren(TuiTabDirective)
    private readonly itemsList: QueryList<TuiTabDirective> = EMPTY_QUERY;

    open = false;

    lastVisibleIndex = Infinity;

    @ViewChild(TuiTabComponent, {read: ElementRef})
    private readonly moreButton?: ElementRef<HTMLButtonElement>;

    private itemsLimit = Infinity;

    constructor(
        @Inject(TABS_REFRESH) private readonly refresh$: Observable<unknown>,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_MORE_WORD) readonly moreWord$: Observable<string>,
    ) {}

    @tuiPure
    get items$(): Observable<QueryList<TuiTabDirective>> {
        return this.itemsList.changes.pipe(startWith(this.itemsList));
    }

    get tabs(): ReadonlyArray<HTMLElement> {
        return Array.from(
            this.elementRef.nativeElement.querySelectorAll('[tuiTab]'),
        ) as Array<HTMLElement>;
    }

    get activeElement(): HTMLElement | null {
        const {tabs} = this;

        if (this.activeItemIndex > this.lastVisibleIndex) {
            return tabs[tabs.length - 1];
        }

        return tabs[this.activeItemIndex] || null;
    }

    get isMoreVisible(): boolean {
        return this.lastVisibleIndex < this.tabs.length - 2;
    }

    get isMoreActive(): boolean {
        return this.open || this.activeItemIndex > this.lastVisibleIndex;
    }

    get isMoreFocusable(): boolean {
        return (
            this.isMoreActive ||
            (!!this.moreButton && isNativeFocused(this.moreButton.nativeElement))
        );
    }

    ngAfterViewInit() {
        this.refresh$
            .pipe(
                map(() => this.getLastVisibleIndex()),
                filter(lastVisibleIndex => this.lastVisibleIndex !== lastVisibleIndex),
            )
            .subscribe(lastVisibleIndex => {
                this.lastVisibleIndex = lastVisibleIndex;
                this.changeDetectorRef.detectChanges();
            });
    }

    onActiveItemIndexChange(activeItemIndex: number) {
        this.updateActiveItemIndex(activeItemIndex);
    }

    onPresent(isPresent: boolean, {children}: HTMLElement) {
        if (!isPresent || this.lastVisibleIndex >= this.activeItemIndex) {
            return;
        }

        const buttons = Array.from(children);
        const active = buttons[this.activeItemIndex - this.lastVisibleIndex - 1];

        this.renderer.addClass(active, TAB_ACTIVE_CLASS);
    }

    onClick() {
        this.open = false;
        this.focusMore();
    }

    onActivate(tab: HTMLElement, {children}: HTMLElement) {
        const elements = Array.from(children);
        const index = elements.findIndex(element => element === tab);

        if (index !== -1) {
            this.updateActiveItemIndex(index + this.lastVisibleIndex + 1);
        }
    }

    onArrowRight(element: HTMLElement) {
        if (isNativeFocused(element)) {
            this.focusMore();
        }
    }

    onArrowLeft() {
        const {tabs} = this;
        let index = tabs.length - 2;

        while (index >= 0) {
            setNativeFocused(tabs[index]);

            if (isNativeFocused(tabs[index])) {
                return;
            }

            index--;
        }
    }

    onWrapperArrow(button: HTMLButtonElement, wrapper: HTMLElement, prev: boolean) {
        const target = getClosestKeyboardFocusable(button, prev, wrapper);

        if (target) {
            setNativeFocused(target);
        }
    }

    private focusMore() {
        if (this.moreButton) {
            setNativeFocused(this.moreButton.nativeElement);
        }
    }

    private getLastVisibleIndex(): number {
        const {tabs} = this;

        if (!tabs.length) {
            return 0;
        }

        const filtered = tabs.filter(
            (tab, index) => tab.scrollWidth && index !== tabs.length - 1,
        );
        const last = filtered[filtered.length - 1];
        const moreWidth = tabs[tabs.length - 1].scrollWidth;
        const width = this.elementRef.nativeElement.clientWidth - moreWidth - TAB_MARGIN;
        let accumulatedWidth = 0;
        let lastVisibleIndex = 0;

        for (let tabIndex = 0; tabIndex < tabs.length - 1; tabIndex++) {
            accumulatedWidth +=
                tabs[tabIndex] === last
                    ? tabs[tabIndex].scrollWidth - moreWidth - TAB_MARGIN
                    : tabs[tabIndex].scrollWidth;

            if (tabIndex > this.itemsLimit) {
                return lastVisibleIndex - 1;
            }

            if (accumulatedWidth > width) {
                return lastVisibleIndex;
            }

            accumulatedWidth += TAB_MARGIN * Math.min(tabs[tabIndex].scrollWidth, 1);
            lastVisibleIndex = tabIndex;
        }

        return Infinity;
    }

    private updateActiveItemIndex(activeItemIndex: number) {
        if (this.activeItemIndex === activeItemIndex) {
            return;
        }

        this.activeItemIndex = activeItemIndex;
        this.activeItemIndexChange.emit(activeItemIndex);
    }
}
