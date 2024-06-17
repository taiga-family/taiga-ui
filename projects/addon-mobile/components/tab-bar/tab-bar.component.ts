import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    HostListener,
    Input,
    Output,
} from '@angular/core';
import {EMPTY_QUERY, tuiIsElement, TuiRepeatTimes} from '@taiga-ui/cdk';

import {TuiTabBarItemComponent} from './tab-bar-item.component';

@Component({
    standalone: true,
    selector: 'nav[tuiTabBar]',
    imports: [TuiRepeatTimes],
    templateUrl: './tab-bar.template.html',
    styleUrls: ['./tab-bar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTabBarComponent {
    @ContentChildren(forwardRef(() => TuiTabBarItemComponent), {read: ElementRef})
    private readonly tabs: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @Input()
    public quantity = 4;

    @Input()
    public activeItemIndex = NaN;

    @Output()
    public readonly activeItemIndexChange = new EventEmitter<number>();

    @HostListener('click', ['$event.target'])
    public setActive(tab: EventTarget): void {
        if (tuiIsElement(tab)) {
            this.updateIndex(
                this.tabs.toArray().findIndex(({nativeElement}) => nativeElement === tab),
            );
        }
    }

    @HostBinding('style')
    protected get style(): string {
        return `--tui-tab-${this.activeItemIndex + 1}: var(--tui-active-color)`;
    }

    private updateIndex(index: number): void {
        this.activeItemIndex = index;
        this.activeItemIndexChange.emit(index);
    }
}
