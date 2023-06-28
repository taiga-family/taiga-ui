import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
} from '@angular/core';
import {TuiSizeS, TuiSizeXL} from '@taiga-ui/core';

@Component({
    selector: 'tui-ring-chart',
    templateUrl: './ring-chart.template.html',
    styleUrls: ['./ring-chart.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiRingChartComponent {
    @Input()
    value: readonly number[] = [];

    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeS | TuiSizeXL = 'm';

    @Input()
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
