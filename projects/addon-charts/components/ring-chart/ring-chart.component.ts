import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
} from '@angular/core';
import {TUI_DEFAULT_COLOR_HANDLER} from '@taiga-ui/addon-charts/constants';
import {TuiRingChartContext} from '@taiga-ui/addon-charts/interfaces';
import {TuiColorHandler} from '@taiga-ui/addon-charts/types';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {TuiSizeS, TuiSizeXL} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

// TODO: 3.0 Refactor to use ng-content
@Component({
    selector: 'tui-ring-chart',
    templateUrl: './ring-chart.template.html',
    styleUrls: ['./ring-chart.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiRingChartComponent {
    @Input()
    @tuiDefaultProp()
    value: readonly number[] = [];

    @Input()
    @HostBinding('attr.data-size')
    @tuiDefaultProp()
    size: TuiSizeS | TuiSizeXL = 'm';

    /** @deprecated */
    @Input()
    @tuiDefaultProp()
    colorHandler: TuiColorHandler = TUI_DEFAULT_COLOR_HANDLER;

    /** @deprecated */
    @Input()
    @tuiDefaultProp()
    content: PolymorpheusContent<TuiRingChartContext> = '';

    @Input()
    @tuiDefaultProp()
    masked = true;

    @Input()
    @tuiDefaultProp()
    activeItemIndex = NaN;

    @Output()
    readonly activeItemIndexChange = new EventEmitter<number>();

    onActiveItemIndexChange(index: number): void {
        this.updateActiveItemIndex(index);
    }

    private updateActiveItemIndex(index: number): void {
        if (index === this.activeItemIndex) {
            return;
        }

        this.activeItemIndex = index;
        this.activeItemIndexChange.next(index);
    }
}
