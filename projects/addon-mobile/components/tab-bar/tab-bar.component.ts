import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    forwardRef,
    input,
    model,
    type QueryList,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
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
        '[style]': 'style',
        '(click)': 'setActive($event.target)',
    },
})
export class TuiTabBarComponent {
    @ContentChildren(forwardRef(() => TuiTabBarItem), {read: ElementRef})
    private readonly tabs: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    public readonly quantity = input(4);

    public readonly activeItemIndex = model(NaN);

    public setActive(tab: EventTarget | null): void {
        if (tuiIsElement(tab)) {
            this.updateIndex(
                this.tabs.toArray().findIndex(({nativeElement}) => nativeElement === tab),
            );
        }
    }

    protected get style(): string {
        return `--tui-tab-${this.activeItemIndex() + 1}: var(--tui-active-color)`;
    }

    private updateIndex(index: number): void {
        this.activeItemIndex.set(index);
    }
}
