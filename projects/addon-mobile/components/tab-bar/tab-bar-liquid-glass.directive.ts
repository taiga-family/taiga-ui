import {computed, Directive, inject} from '@angular/core';

import {TuiTabBarComponent} from './tab-bar.component';

@Directive({
    host: {
        '[class.tui-liquid-glass_fullwidth]': 'fullwidth()',
        '[style.--t-tab-active]': 'index()',
        '[style.--t-tab-count]': 'count()',
        '[style.--t-tab-mid]': 'mid() ? 1 : 0',
    },
})
export class TuiTabBarLiquidGlass {
    private readonly tabBar = inject(TuiTabBarComponent);

    protected readonly count = this.tabBar.count;
    protected readonly index = computed(() => this.tabBar.activeItemIndex());

    protected readonly fullwidth = computed(
        () => (this.count() || this.tabBar.quantity()) > 3,
    );

    protected readonly mid = computed(
        () => this.index() > 0 && this.index() < this.count() - 1,
    );
}
