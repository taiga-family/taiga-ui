import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    forwardRef,
    inject,
    Input,
    Output,
    type QueryList,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiRepeatTimes} from '@taiga-ui/cdk/directives/repeat-times';
import {TUI_PLATFORM} from '@taiga-ui/cdk/tokens';
import {tuiIsElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_LIQUID_GLASS} from '@taiga-ui/core/utils/miscellaneous';

import {TuiTabBarItem} from './tab-bar-item.component';
import {TuiTabBarLiquidGlass} from './tab-bar-liquid-glass.directive';

@Component({
    standalone: true,
    selector: 'nav[tuiTabBar]',
    imports: [NgIf, TuiRepeatTimes],
    templateUrl: './tab-bar.template.html',
    styleUrls: ['./tab-bar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiTabBarLiquidGlass],
    host: {
        '[style]': 'style',
        '(click)': 'setActive($event.target)',
    },
})
export class TuiTabBarComponent {
    @ContentChildren(forwardRef(() => TuiTabBarItem), {read: ElementRef})
    private readonly tabs: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    protected readonly liquidGlass =
        inject(TUI_LIQUID_GLASS) && inject(TUI_PLATFORM) === 'ios';

    @Input()
    public quantity = 4;

    @Input()
    public activeItemIndex = NaN;

    @Output()
    public readonly activeItemIndexChange = new EventEmitter<number>();

    public get count(): number {
        return this.tabs.length;
    }

    public setActive(tab: EventTarget): void {
        if (!tuiIsElement(tab)) {
            return;
        }

        const index = this.tabs
            .toArray()
            .findIndex(({nativeElement}) => nativeElement === tab);

        if (index > -1) {
            this.updateIndex(index);
        }
    }

    protected get style(): string {
        return `--tui-tab-${this.activeItemIndex + 1}: var(--tui-active-color)`;
    }

    private updateIndex(index: number): void {
        this.activeItemIndex = index;
        this.activeItemIndexChange.emit(index);
    }
}
