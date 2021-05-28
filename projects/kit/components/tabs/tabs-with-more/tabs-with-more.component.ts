import {
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Output,
    QueryList,
    Renderer2,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {
    EMPTY_QUERY,
    getClosestFocusable,
    isNativeFocused,
    itemsQueryListObservable,
    moveFocus,
    setNativeFocused,
    tuiDefaultProp,
    TuiDestroyService,
} from '@taiga-ui/cdk';
import {TUI_MORE_WORD} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {delay, filter, map, mergeMap, take, takeUntil} from 'rxjs/operators';
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
export class TuiTabsWithMoreComponent
    implements AfterViewInit, AfterContentInit, AfterViewChecked {
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

    @Input()
    @tuiDefaultProp()
    itemsLimit = Infinity;

    @Output()
    readonly activeItemIndexChange = new EventEmitter<number>();

    @ContentChildren(TuiTabDirective, {read: TemplateRef})
    readonly items: QueryList<TemplateRef<{}>> = EMPTY_QUERY;

    @ContentChildren(TuiTabComponent)
    readonly children: QueryList<TuiTabComponent> = EMPTY_QUERY;

    open = false;

    private maxIndex = Infinity;

    @ViewChild(TuiTabComponent, {read: ElementRef})
    private readonly moreButton?: ElementRef<HTMLButtonElement>;

    constructor(
        @Inject(TABS_REFRESH) private readonly refresh$: Observable<unknown>,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_MORE_WORD) readonly moreWord$: Observable<string>,
        @Inject(Renderer2) private renderer: Renderer2,
        @Inject(TuiDestroyService) private destroy$: TuiDestroyService,
    ) {}

    ngAfterContentInit(): void {
        itemsQueryListObservable(this.items)
            .pipe(
                mergeMap(() => this.children.changes.pipe(take(1))),
                delay(0),
                map(tabs => tabs.toArray()),
                filter((data: TuiTabComponent[]) => {
                    return !data.length || data.some(tab => tab.withRouterLinkActive);
                }),
                map(data => data.findIndex(tab => tab.isActive)),
                takeUntil(this.destroy$),
            )
            .subscribe(index => {
                this.updateActiveItemIndex(index);
            });
    }

    ngAfterViewChecked() {
        const tabs = this.tabs;
        const activeTab = tabs[this.activeItemIndex];

        tabs.forEach(tab => {
            this.renderer.removeClass(tab, TAB_ACTIVE_CLASS);
            this.renderer.setAttribute(tab, 'tabIndex', '-1');
        });

        if (activeTab) {
            this.renderer.addClass(activeTab, TAB_ACTIVE_CLASS);
            this.renderer.setAttribute(activeTab, 'tabIndex', '0');
        }
    }

    get tabs(): ReadonlyArray<HTMLElement> {
        return this.children
            .toArray()
            .map(tab => tab.element.nativeElement)
            .filter(tab =>
                tab.parentElement ? tab.parentElement.classList.contains('tab') : false,
            )
            .concat(this.moreButton?.nativeElement);
    }

    get activeElement(): HTMLElement | null {
        return this.tabs[this.activeItemIndex] || null;
    }

    get isMoreVisible(): boolean {
        return this.lastVisibleIndex < this.items.length - 1;
    }

    get isMoreFocusable(): boolean {
        return !!this.moreButton && isNativeFocused(this.moreButton.nativeElement);
    }

    get lastVisibleIndex(): number {
        if (this.itemsLimit + 1 >= this.items.length) {
            return this.maxIndex;
        }

        const offset = this.itemsLimit - 1 > this.activeItemIndex ? 1 : 2;

        return Math.min(this.itemsLimit - offset, this.maxIndex);
    }

    ngAfterViewInit() {
        this.refresh$
            .pipe(
                map(() => this.getMaxIndex()),
                filter(maxIndex => this.maxIndex !== maxIndex),
            )
            .subscribe(maxIndex => {
                this.maxIndex = maxIndex;
                this.changeDetectorRef.detectChanges();
            });
    }

    onClick(index: number) {
        this.open = false;
        this.focusMore();
        this.updateActiveItemIndex(index);
        this.changeDetectorRef.detectChanges();
    }

    onWrapperArrow(button: HTMLButtonElement, wrapper: HTMLElement, prev: boolean) {
        const target = getClosestFocusable(button, prev, wrapper);

        if (target) {
            setNativeFocused(target);
        }
    }

    onActivate(index: number) {
        if (this.open) {
            this.focusMore();
        }

        this.open = false;
        this.updateActiveItemIndex(index);
    }

    @HostListener('keydown.arrowRight.prevent', ['$event.target', '1'])
    @HostListener('keydown.arrowLeft.prevent', ['$event.target', '-1'])
    onKeyDownArrow(current: HTMLElement, step: number) {
        const tabs = this.tabs;

        moveFocus(tabs.indexOf(current), tabs, step);
    }

    private focusMore() {
        if (this.moreButton) {
            setNativeFocused(this.moreButton.nativeElement);
        }
    }

    private getMaxIndex(): number {
        const {tabs, activeItemIndex} = this;

        if (tabs.length < 2) {
            return 0;
        }

        const {clientWidth} = this.elementRef.nativeElement;
        const activeWidth = tabs[activeItemIndex] ? tabs[activeItemIndex].scrollWidth : 0;
        const moreWidth = tabs[tabs.length - 1].scrollWidth;
        let maxIndex = tabs.length - 2;
        let total =
            tabs.reduce((acc, tab) => acc + tab.scrollWidth, 0) +
            maxIndex * TAB_MARGIN -
            moreWidth;

        if (total <= clientWidth) {
            return Infinity;
        }

        while (maxIndex) {
            total -= tabs[maxIndex].scrollWidth + TAB_MARGIN;
            maxIndex--;

            const activeOffset =
                activeItemIndex > maxIndex ? activeWidth + TAB_MARGIN : 0;

            if (total + activeOffset + moreWidth + TAB_MARGIN < clientWidth) {
                return maxIndex;
            }
        }

        return 0;
    }

    private updateActiveItemIndex(activeItemIndex: number) {
        if (this.activeItemIndex === activeItemIndex) {
            return;
        }

        this.activeItemIndex = activeItemIndex;
        this.activeItemIndexChange.emit(activeItemIndex);
        this.maxIndex = this.getMaxIndex();
    }
}
