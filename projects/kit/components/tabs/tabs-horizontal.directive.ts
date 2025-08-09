import {
    type AfterViewChecked,
    ContentChildren,
    Directive,
    forwardRef,
    inject,
    Input,
    type QueryList,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
    MutationObserverService,
    WA_MUTATION_OBSERVER_INIT,
} from '@ng-web-apis/mutation-observer';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiPure, tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';

import {TuiTab} from './tab.directive';
import {TuiTabsDirective} from './tabs.directive';
import {TUI_TABS_OPTIONS} from './tabs.options';

@Directive({
    standalone: true,
    selector: 'tui-tabs:not([vertical]), nav[tuiTabs]:not([vertical])',
    providers: [
        MutationObserverService,
        {
            provide: WA_MUTATION_OBSERVER_INIT,
            useValue: {
                childList: true,
                characterData: true,
                subtree: true,
            },
        },
    ],
    hostDirectives: [
        {
            directive: TuiTabsDirective,
            inputs: ['activeItemIndex', 'size'],
            outputs: ['activeItemIndexChange'],
        },
    ],
    host: {
        '[class._underline]': 'underline',
        '[class._anchor-supported]': 'anchorSupported',
        '[style.--t-color]':
            "underline === true ? 'var(--tui-background-accent-1)' : underline",
        '(animationend)': 'refresh()',
        '(keydown.arrowRight.prevent)': 'onKeyDownArrow($event.target, 1)',
        '(keydown.arrowLeft.prevent)': 'onKeyDownArrow($event.target, -1)',
    },
})
export class TuiTabsHorizontal implements AfterViewChecked {
    private readonly el = tuiInjectElement();
    private readonly options = inject(TUI_TABS_OPTIONS);
    private readonly tabs = inject(TuiTabsDirective);

    public readonly anchorSupported = this.supportsAnchorPositioning();

    @ContentChildren(forwardRef(() => TuiTab))
    protected readonly children: QueryList<unknown> = EMPTY_QUERY;

    protected readonly sub = inject(MutationObserverService, {self: true})
        .pipe(tuiZonefree(), takeUntilDestroyed())
        .subscribe(() => this.refresh());

    @Input()
    public underline = this.options.underline;

    public ngAfterViewChecked(): void {
        this.scrollTo(this.tabs.activeItemIndex);
        this.refresh();
    }

    protected onKeyDownArrow(current: HTMLElement, step: number): void {
        this.tabs.moveFocus(current, step);
    }

    protected refresh(): void {
        const {activeElement} = this.tabs;

        if (activeElement && !activeElement.isConnected) {
            return;
        }

        // Skip manual positioning if CSS anchor positioning is supported
        if (this.anchorSupported) {
            this.setupAnchorPositioning(activeElement);

            return;
        }

        // Fallback to manual positioning for browsers without anchor support
        const {offsetLeft = 0, offsetWidth = 0} = activeElement || {};

        this.el.style.setProperty('--t-left', tuiPx(offsetLeft));
        this.el.style.setProperty('--t-width', tuiPx(offsetWidth));
    }

    private supportsAnchorPositioning(): boolean {
        try {
            return (
                typeof CSS !== 'undefined' &&
                typeof CSS.supports === 'function' &&
                CSS.supports('anchor-name: --test')
            );
        } catch {
            return false;
        }
    }

    private setupAnchorPositioning(activeElement: HTMLElement | null): void {
        // When using CSS anchor positioning, we only need to ensure the active element
        // has the correct anchor name. The CSS handles the rest.
        if (activeElement) {
            // Remove anchor name from all tabs
            this.tabs.tabs.forEach((tab) => {
                tab.style.setProperty('anchor-name', '');
            });
            // Set anchor name for active tab
            activeElement.style.setProperty('anchor-name', '--active-tab');
        }
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
