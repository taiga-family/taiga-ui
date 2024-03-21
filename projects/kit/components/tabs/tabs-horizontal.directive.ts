import type {AfterViewChecked, QueryList} from '@angular/core';
import {
    ContentChildren,
    Directive,
    ElementRef,
    forwardRef,
    HostListener,
    inject,
    Input,
    NgZone,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {EMPTY_QUERY, tuiPure, tuiPx, tuiZonefree} from '@taiga-ui/cdk';

import {TuiTabDirective} from './tab.directive';
import {TuiTabsDirective} from './tabs.directive';
import {TUI_TABS_OPTIONS} from './tabs.options';

@Directive({
    standalone: true,
    selector: 'tui-tabs:not([vertical]), nav[tuiTabs]:not([vertical])',
    hostDirectives: [
        {
            directive: TuiTabsDirective,
            inputs: ['activeItemIndex'],
            outputs: ['activeItemIndexChange'],
        },
    ],
    providers: [
        MutationObserverService,
        {
            provide: MUTATION_OBSERVER_INIT,
            useValue: {
                childList: true,
                characterData: true,
                subtree: true,
            },
        },
    ],
    host: {
        '[class._underline]': 'underline',
        '[style.--t-color]': "underline === true ? 'var(--tui-primary)' : underline",
    },
})
export class TuiTabsHorizontalDirective implements AfterViewChecked {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly options = inject(TUI_TABS_OPTIONS);
    private readonly tabs = inject(TuiTabsDirective);

    @Input()
    public underline = this.options.underline;

    @ContentChildren(forwardRef(() => TuiTabDirective))
    protected readonly children: QueryList<unknown> = EMPTY_QUERY;

    protected readonly sub = inject(MutationObserverService)
        .pipe(tuiZonefree(inject(NgZone)), takeUntilDestroyed())
        .subscribe(() => this.refresh());

    public ngAfterViewChecked(): void {
        this.scrollTo(this.tabs.activeItemIndex);
        this.refresh();
    }

    @HostListener('keydown.arrowRight.prevent', ['$event.target', '1'])
    @HostListener('keydown.arrowLeft.prevent', ['$event.target', '-1'])
    protected onKeyDownArrow(current: HTMLElement, step: number): void {
        this.tabs.moveFocus(current, step);
    }

    @HostListener('animationend')
    protected refresh(): void {
        const {activeElement} = this.tabs;

        if (activeElement && !activeElement.isConnected) {
            return;
        }

        const {offsetLeft = 0, offsetWidth = 0} = activeElement || {};

        this.el.style.setProperty('--t-left', tuiPx(offsetLeft));
        this.el.style.setProperty('--t-width', tuiPx(offsetWidth));
    }

    @tuiPure
    private scrollTo(index: number): void {
        const element = this.tabs.tabs[index];

        if (!element) {
            return;
        }

        const {offsetLeft, offsetWidth} = element;

        if (offsetLeft < this.el.scrollLeft) {
            this.el.scrollLeft = offsetLeft;
        }

        if (offsetLeft + offsetWidth > this.el.scrollLeft + this.el.offsetWidth) {
            this.el.scrollLeft = offsetLeft + offsetWidth - this.el.offsetWidth;
        }
    }
}
