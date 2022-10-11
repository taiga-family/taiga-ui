import {
    AfterViewChecked,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    forwardRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    QueryList,
} from '@angular/core';
import {
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {
    EMPTY_QUERY,
    tuiDefaultProp,
    TuiDestroyService,
    tuiPure,
    TuiResizeService,
} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

import {TuiTabComponent} from '../tab/tab.component';
import {TuiTabsDirective} from '../tabs.directive';
import {TUI_TABS_OPTIONS, TuiTabsOptions} from '../tabs-options';

@Component({
    selector: `tui-tabs:not([vertical]), nav[tuiTabs]:not([vertical])`,
    templateUrl: `./tabs.template.html`,
    styleUrls: [`./tabs.style.less`],
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
    @HostBinding(`class._underline`)
    @tuiDefaultProp()
    underline = this.options.underline;

    constructor(
        @Inject(TUI_TABS_OPTIONS) private readonly options: TuiTabsOptions,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiTabsDirective) private readonly tabs: TuiTabsDirective,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TuiResizeService) resize$: Observable<void>,
    ) {
        resize$.pipe(filter(() => this.underline)).subscribe(() => {
            changeDetectorRef.detectChanges();
        });
    }

    /** @deprecated use `activeItemIndex` from {@link TuiTabsDirective} instead */
    get activeItemIndex(): number {
        return this.tabs.activeItemIndex;
    }

    /** @deprecated use `activeItemIndex` from {@link TuiTabsDirective} instead */
    set activeItemIndex(index: number) {
        this.tabs.activeItemIndex = index;
    }

    get activeElement(): HTMLElement | null {
        return this.tabs.activeElement;
    }

    @HostListener(`keydown.arrowRight.prevent`, [`$event.target`, `1`])
    @HostListener(`keydown.arrowLeft.prevent`, [`$event.target`, `-1`])
    onKeyDownArrow(current: HTMLElement, step: number): void {
        this.tabs.moveFocus(current, step);
    }

    ngAfterViewChecked(): void {
        this.scrollTo(this.tabs.activeItemIndex);
    }

    @tuiPure
    private scrollTo(index: number): void {
        const element = this.tabs.tabs[index];

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
