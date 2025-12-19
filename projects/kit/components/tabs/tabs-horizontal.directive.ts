import {type AfterViewChecked, Directive, effect, inject, input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
    WaMutationObserverService,
    WA_MUTATION_OBSERVER_INIT,
} from '@ng-web-apis/mutation-observer';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';

import {TuiTabsDirective} from './tabs.directive';
import {TUI_TABS_OPTIONS} from './tabs.options';

@Directive({
    selector: 'tui-tabs:not([vertical])',
    providers: [
        WaMutationObserverService,
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
        '[class._underline]': 'underline()',
        '[style.--t-color]':
            "underline() === true ? 'var(--tui-background-accent-1)' : underline()",
        '(animationend)': 'refresh()',
        '(keydown.arrowRight.prevent)': 'onKeyDownArrow($event.target, 1)',
        '(keydown.arrowLeft.prevent)': 'onKeyDownArrow($event.target, -1)',
    },
})
export class TuiTabsHorizontal implements AfterViewChecked {
    private readonly el = tuiInjectElement();
    private readonly options = inject(TUI_TABS_OPTIONS);
    private readonly tabs = inject(TuiTabsDirective);

    protected readonly sub = inject(WaMutationObserverService, {self: true})
        .pipe(tuiZonefree(), takeUntilDestroyed())
        .subscribe(() => this.refresh());

    public readonly underline = input(this.options.underline);

    constructor() {
        effect(() => {
            const index = this.tabs.activeItemIndex();
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
        });
    }

    public ngAfterViewChecked(): void {
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

        const {offsetLeft = 0, offsetWidth = 0} = activeElement || {};

        this.el.style.setProperty('--t-left', tuiPx(offsetLeft));
        this.el.style.setProperty('--t-width', tuiPx(offsetWidth));
    }
}
