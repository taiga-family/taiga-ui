import {
    ChangeDetectionStrategy,
    Component,
    contentChildren,
    ElementRef,
    EventEmitter,
    forwardRef,
    Input,
    Output,
} from '@angular/core';
import {tuiIsElement} from '@taiga-ui/cdk/utils/dom';

import {TuiTabBarItem} from './tab-bar-item.component';

@Component({
    selector: 'nav[tuiTabBar]',
    templateUrl: './tab-bar.template.html',
    styleUrl: './tab-bar.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style]': 'style',
        '(click)': 'setActive($event.target)',
    },
})
export class TuiTabBarComponent {
    private readonly tabs = contentChildren(
        forwardRef(() => TuiTabBarItem),
        {read: ElementRef},
    );

    @Input()
    public quantity = 4;

    @Input()
    public activeItemIndex = NaN;

    @Output()
    public readonly activeItemIndexChange = new EventEmitter<number>();

    public setActive(tab: EventTarget): void {
        if (tuiIsElement(tab)) {
            this.updateIndex(
                this.tabs().findIndex(({nativeElement}) => nativeElement === tab),
            );
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
