import {
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
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {
    EMPTY_QUERY,
    tuiDefaultProp,
    TuiDestroyService,
    tuiMoveFocus,
    TuiResizeService,
} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

import {TuiTabComponent} from '../tab/tab.component';
import {TUI_TAB_ACTIVATE} from '../tab/tab.providers';
import {TUI_TABS_OPTIONS, TuiTabsOptions} from '../tabs-options';

const TAB_ACTIVE_CLASS = '_active';

// @dynamic
@Component({
    selector: 'tui-tabs, nav[tuiTabs]',
    templateUrl: './tabs.template.html',
    styleUrls: ['./tabs.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        TuiResizeService,
        MutationObserverService,
        {
            provide: MUTATION_OBSERVER_INIT,
            useValue: {
                childList: true,
            },
        },
    ],
})
export class TuiTabsComponent implements AfterViewChecked {
    @ContentChildren(forwardRef(() => TuiTabComponent))
    readonly children: QueryList<unknown> = EMPTY_QUERY;

    @Input()
    @HostBinding('class._underline')
    @tuiDefaultProp()
    underline = this.options.underline;

    @Input('activeItemIndex')
    set activeItemIndexSetter(index: number) {
        this.activeItemIndex = index;
        this.scrollTo(this.tabs[index]);
    }

    @Output()
    readonly activeItemIndexChange = new EventEmitter<number>();

    activeItemIndex = 0;

    constructor(
        @Inject(TUI_TABS_OPTIONS) private readonly options: TuiTabsOptions,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TuiResizeService) resize$: Observable<void>,
    ) {
        resize$.pipe(filter(() => this.underline)).subscribe(() => {
            changeDetectorRef.detectChanges();
        });
    }

    get tabs(): readonly HTMLElement[] {
        return Array.from(
            this.elementRef.nativeElement.querySelectorAll<HTMLElement>('[tuiTab]'),
        );
    }

    get activeElement(): HTMLElement | null {
        return this.tabs[this.activeItemIndex] || null;
    }

    @HostListener(`${TUI_TAB_ACTIVATE}.stop`, ['$event.target'])
    onActivate(element: HTMLElement): void {
        const index = this.tabs.findIndex(tab => tab === element);

        if (index === this.activeItemIndex) {
            return;
        }

        this.activeItemIndexSetter = index;
        this.activeItemIndexChange.emit(index);
    }

    @HostListener('keydown.arrowRight.prevent', ['$event.target', '1'])
    @HostListener('keydown.arrowLeft.prevent', ['$event.target', '-1'])
    onKeyDownArrow(current: HTMLElement, step: number): void {
        const {tabs} = this;

        tuiMoveFocus(tabs.indexOf(current), tabs, step);
    }

    ngAfterViewChecked(): void {
        const {tabs, activeElement} = this;

        tabs.forEach(nativeElement => {
            this.renderer.removeClass(nativeElement, TAB_ACTIVE_CLASS);
            this.renderer.setAttribute(nativeElement, 'tabIndex', '-1');
        });

        if (activeElement) {
            this.renderer.addClass(activeElement, TAB_ACTIVE_CLASS);
            this.renderer.setAttribute(activeElement, 'tabIndex', '0');
        }
    }

    private scrollTo(element?: HTMLElement): void {
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
