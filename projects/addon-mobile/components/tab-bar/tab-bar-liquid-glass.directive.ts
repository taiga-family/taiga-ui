import {Directive, inject} from '@angular/core';

import {TuiTabBarComponent} from './tab-bar.component';

@Directive({
    standalone: true,
    host: {
        '[class.tui-liquid-glass_fullwidth]': 'fullwidth',
        '[style.--t-tab-active]': 'index',
        '[style.--t-tab-count]': 'count',
        '[style.--t-tab-mid]': 'mid ? 1 : 0',
    },
})
export class TuiTabBarLiquidGlass {
    private readonly tabBar = inject(TuiTabBarComponent);

    protected get count(): number {
        return this.tabBar.count;
    }

    protected get index(): number {
        return this.tabBar.activeItemIndex;
    }

    protected get fullwidth(): boolean {
        return (this.count || this.tabBar.quantity) > 3;
    }

    protected get mid(): boolean {
        return this.index > 0 && this.index < this.count - 1;
    }
}
