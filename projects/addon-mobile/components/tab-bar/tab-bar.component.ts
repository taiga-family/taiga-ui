import {
    ChangeDetectionStrategy,
    Component,
    computed,
    contentChildren,
    ElementRef,
    forwardRef,
    input,
    model,
} from '@angular/core';
import {TuiRepeatTimes} from '@taiga-ui/cdk/directives/repeat-times';
import {tuiIsElement} from '@taiga-ui/cdk/utils/dom';

import {TuiTabBarItem} from './tab-bar-item.component';

@Component({
    selector: 'nav[tuiTabBar]',
    imports: [TuiRepeatTimes],
    templateUrl: './tab-bar.template.html',
    styleUrl: './tab-bar.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style]': 'style()',
        '(click)': 'setActive($event.target)',
    },
})
export class TuiTabBarComponent {
    private readonly tabs = contentChildren<ElementRef<HTMLElement>, ElementRef>(
        forwardRef(() => TuiTabBarItem),
        {read: ElementRef},
    );

    protected readonly style = computed(
        () => `--tui-tab-${this.activeItemIndex() + 1}: var(--tui-active-color)`,
    );

    public readonly quantity = input(4);

    public readonly activeItemIndex = model(NaN);

    public setActive(tab: EventTarget): void {
        if (tuiIsElement(tab)) {
            this.updateIndex(
                this.tabs().findIndex(({nativeElement}) => nativeElement === tab),
            );
        }
    }

    private updateIndex(index: number): void {
        this.activeItemIndex.set(index);
    }
}
