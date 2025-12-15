import {ChangeDetectionStrategy, Component, input, model} from '@angular/core';
import {TuiPieChart} from '@taiga-ui/addon-charts/components/pie-chart';
import {type TuiSizeXL, type TuiSizeXS} from '@taiga-ui/core/types';

@Component({
    selector: 'tui-ring-chart',
    imports: [TuiPieChart],
    templateUrl: './ring-chart.template.html',
    styleUrl: './ring-chart.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-size]': 'size()',
    },
})
export class TuiRingChart {
    public readonly value = input<readonly number[]>([]);
    public readonly size = input<TuiSizeXL | TuiSizeXS>('m');
    public readonly activeItemIndex = model(NaN);
}
