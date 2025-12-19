import {
    ChangeDetectionStrategy,
    Component,
    contentChildren,
    ElementRef,
    input,
    model,
} from '@angular/core';

import {TuiTabBarItem} from './tab-bar-item.component';

@Component({
    selector: 'nav[tuiTabBar]',
    templateUrl: './tab-bar.template.html',
    styleUrl: './tab-bar.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style]': '`--tui-tab-${this.activeItemIndex() + 1}: var(--tui-active-color)`',
        '(click)': 'setActive($event.target)',
    },
})
export class TuiTabBarComponent {
    private readonly tabs = contentChildren(TuiTabBarItem, {read: ElementRef});

    public readonly quantity = input(4);
    public readonly activeItemIndex = model(NaN);

    public setActive(tab: Element): void {
        this.updateIndex(this.tabs().findIndex((el) => el.nativeElement === tab));
    }

    private updateIndex(index: number): void {
        this.activeItemIndex.set(index);
    }
}
