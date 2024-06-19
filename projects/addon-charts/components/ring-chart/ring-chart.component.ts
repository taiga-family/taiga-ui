import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
} from '@angular/core';
import {TuiPieChartComponent} from '@taiga-ui/addon-charts/components/pie-chart';
import type {TuiSizeXL, TuiSizeXS} from '@taiga-ui/core/types';

@Component({
    standalone: true,
    selector: 'tui-ring-chart',
    imports: [TuiPieChartComponent],
    templateUrl: './ring-chart.template.html',
    styleUrls: ['./ring-chart.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiRingChartComponent {
    @Input()
    public value: readonly number[] = [];

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeXL | TuiSizeXS = 'm';

    @Input()
    public activeItemIndex = NaN;

    @Output()
    public readonly activeItemIndexChange = new EventEmitter<number>();

    protected onActiveItemIndexChange(index: number): void {
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
