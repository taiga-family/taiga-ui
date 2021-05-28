import {
    AfterContentInit,
    AfterViewChecked,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Output,
    QueryList,
    Renderer2,
} from '@angular/core';
import {
    EMPTY_QUERY,
    itemsQueryListObservable,
    moveFocus,
    TUI_IS_ANDROID,
    TUI_IS_IOS,
    tuiDefaultProp,
    TuiDestroyService,
    tuiPure,
    TuiResizeService,
} from '@taiga-ui/cdk';
import {TUI_MOBILE_AWARE} from '@taiga-ui/kit/tokens';
import {Observable} from 'rxjs';
import {filter, map, mapTo, take, takeUntil} from 'rxjs/operators';
import {TuiTabComponent} from '../tab/tab.component';
import {TUI_TAB_ACTIVATE} from '../tab/tab.providers';
import {TAB_ACTIVE_CLASS} from '../tabs.const';

// @dynamic
@Component({
    selector: 'tui-tabs, nav[tuiTabs]',
    templateUrl: './tabs.template.html',
    styleUrls: ['./tabs.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-zero-scrollbar',
    },
    providers: [TuiDestroyService, TuiResizeService],
})
export class TuiTabsComponent implements AfterViewChecked, AfterContentInit {
    @Input()
    @HostBinding('class._underline')
    @tuiDefaultProp()
    underline = true;

    @Input('activeItemIndex')
    set activeItemIndexSetter(index: number) {
        this.activeItemIndex = index;

        this.activeElement$
            .pipe(take(1), takeUntil(this.destroy$))
            .subscribe(activeElement => this.scrollTo(activeElement));
    }

    @Output()
    readonly activeItemIndexChange = new EventEmitter<number>();

    @HostBinding('class._ios')
    readonly isIos: boolean;

    @HostBinding('class._android')
    readonly isAndroid: boolean;

    @ContentChildren(forwardRef(() => TuiTabComponent))
    private readonly children: QueryList<TuiTabComponent> = EMPTY_QUERY;

    activeItemIndex = 0;

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(ChangeDetectorRef) private changeDetectorRef: ChangeDetectorRef,
        @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
        @Inject(TuiResizeService) resize$: Observable<void>,
        @Inject(TUI_IS_IOS) isIos: boolean,
        @Inject(TUI_IS_ANDROID) isAndroid: boolean,
        @Inject(TUI_MOBILE_AWARE) mobileAware: boolean,
    ) {
        this.isIos = mobileAware && isIos;
        this.isAndroid = mobileAware && isAndroid;

        resize$.pipe(filter(() => this.underline)).subscribe(() => {
            changeDetectorRef.detectChanges();
        });
    }

    @tuiPure
    get refresh$(): Observable<boolean> {
        return itemsQueryListObservable(this.children).pipe(mapTo(true));
    }

    get tabs(): ReadonlyArray<TuiTabComponent> {
        return this.children.toArray();
    }

    get tabsElements(): ReadonlyArray<HTMLElement> {
        return this.tabs.map(tab => tab.element.nativeElement);
    }

    get activeElement$(): Observable<HTMLElement | null> {
        return itemsQueryListObservable(this.children).pipe(
            map(tabs => tabs[this.activeItemIndex]),
            map(activeTab => (activeTab ? activeTab.element.nativeElement : null)),
        );
    }

    ngAfterContentInit(): void {
        this.children.changes
            .pipe(
                filter((data: QueryList<TuiTabComponent>) => {
                    return !data.length || data.some(tab => tab.withRouterLinkActive);
                }),
                map(data => data.toArray().findIndex(tab => tab.isActive)),
                takeUntil(this.destroy$),
            )
            .subscribe(index => {
                this.setActiveIndex(index);
            });
    }

    ngAfterViewChecked() {
        const tabs = this.tabsElements;
        const activeElement = tabs[this.activeItemIndex];

        tabs.forEach(nativeElement => {
            this.renderer.removeClass(nativeElement, TAB_ACTIVE_CLASS);
            this.renderer.setAttribute(nativeElement, 'tabIndex', '-1');
        });

        if (activeElement) {
            this.renderer.addClass(activeElement, TAB_ACTIVE_CLASS);
            this.renderer.setAttribute(activeElement, 'tabIndex', '0');
        }
    }

    @HostListener(`${TUI_TAB_ACTIVATE}.stop`, ['$event.target'])
    onActivate(element: HTMLElement) {
        const index = this.tabsElements.findIndex(tab => tab === element);

        this.setActiveIndex(index);
    }

    @HostListener('keydown.arrowRight.prevent', ['$event.target', '1'])
    @HostListener('keydown.arrowLeft.prevent', ['$event.target', '-1'])
    onKeyDownArrow(current: HTMLElement, step: number) {
        moveFocus(this.tabsElements.indexOf(current), this.tabsElements, step);
    }

    setActiveIndex(index: number) {
        if (index === this.activeItemIndex) {
            return;
        }

        this.activeItemIndexSetter = index;
        this.activeItemIndexChange.emit(index);

        this.changeDetectorRef.markForCheck();
    }

    private scrollTo(element: HTMLElement | null = null) {
        if (!element) {
            return;
        }

        const {offsetLeft, offsetWidth} = element;
        const {nativeElement} = this.elementRef;

        if (offsetLeft < nativeElement.scrollLeft) {
            nativeElement.scrollLeft = offsetLeft;
        }

        if (
            offsetLeft + offsetWidth >
            nativeElement.scrollLeft + nativeElement.offsetWidth
        ) {
            nativeElement.scrollLeft =
                offsetLeft + offsetWidth - nativeElement.offsetWidth;
        }
    }
}
