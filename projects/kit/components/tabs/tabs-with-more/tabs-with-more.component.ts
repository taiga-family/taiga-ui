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
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {
    EMPTY_QUERY,
    getClosestFocusable,
    isNativeFocused,
    setNativeFocused,
    tuiDefaultProp,
} from '@taiga-ui/cdk';
import {TUI_MORE_WORD} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {TuiTabDirective} from '../tab.directive';
import {TuiTabComponent} from '../tab/tab.component';
import {TAB_MARGIN} from '../tabs.const';
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

    @Input()
    @tuiDefaultProp()
    itemsLimit = Infinity;

    @Output()
    readonly activeItemIndexChange = new EventEmitter<number>();

    @ContentChildren(TuiTabDirective, {read: TemplateRef})
    readonly items: QueryList<TemplateRef<{}>> = EMPTY_QUERY;

    open = false;

    private maxIndex = Infinity;

    @ViewChild(TuiTabComponent, {read: ElementRef})
    private readonly moreButton?: ElementRef<HTMLButtonElement>;

    constructor(
        @Inject(TABS_REFRESH) private readonly refresh$: Observable<unknown>,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_MORE_WORD) readonly moreWord$: Observable<string>,
    ) {}

    get tabs(): ReadonlyArray<HTMLElement> {
        return Array.from<HTMLElement>(
            this.elementRef.nativeElement.querySelectorAll('[tuiTab]'),
        );
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

    onActiveItemIndexChange(activeItemIndex: number) {
        this.updateActiveItemIndex(activeItemIndex);
    }

    onClick(index: number) {
        this.open = false;
        this.focusMore();
        this.updateActiveItemIndex(index);
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
        const target = getClosestFocusable(button, prev, wrapper);

        if (target) {
            setNativeFocused(target);
        }
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
