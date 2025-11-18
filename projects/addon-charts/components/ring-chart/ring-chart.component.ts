import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {TuiPieChart} from '@taiga-ui/addon-charts/components/pie-chart';
import {type TuiSizeXL, type TuiSizeXS} from '@taiga-ui/core/types';

@Component({
    selector: 'tui-ring-chart',
    imports: [TuiPieChart],
    templateUrl: './ring-chart.template.html',
    styleUrl: './ring-chart.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-size]': 'size',
    },
})
export class TuiRingChart {
    @Input()
    public value: readonly number[] = [];

    @Input()
    public size: TuiSizeXL | TuiSizeXS = 'm';

    @Input()
    public activeItemIndex = NaN;

    @Output()
    public readonly activeItemIndexChange = new EventEmitter<number>();

    protected onActiveItemIndexChange(index: number): void {
        this.#updateActiveItemIndex(index);
    }

    #updateActiveItemIndex(index: number): void {
        if (index === this.activeItemIndex) {
            return;
        }

        this.activeItemIndex = index;
        this.activeItemIndexChange.next(index);
    }
}
