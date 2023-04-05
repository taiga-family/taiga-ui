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
    QueryList,
} from '@angular/core';
import {EMPTY_QUERY, tuiIsElement} from '@taiga-ui/cdk';

import {TuiTabBarItemComponent} from './tab-bar-item.component';

@Component({
    selector: 'nav[tuiTabBar]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./tab-bar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTabBarComponent {
    @ContentChildren(forwardRef(() => TuiTabBarItemComponent), {read: ElementRef})
    private readonly tabs: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @Input()
    activeItemIndex = NaN;

    @Output()
    readonly activeItemIndexChange = new EventEmitter<number>();

    @HostListener('click', ['$event.target'])
    setActive(tab: EventTarget): void {
        if (tuiIsElement(tab)) {
            this.updateIndex(
                this.tabs.toArray().findIndex(({nativeElement}) => nativeElement === tab),
            );
        }
    }

    @HostBinding('style')
    get style(): string {
        return `--tui-tab-${this.activeItemIndex + 1}: var(--tui-active-color)`;
    }

    private updateIndex(index: number): void {
        this.activeItemIndex = index;
        this.activeItemIndexChange.emit(index);
    }
}
