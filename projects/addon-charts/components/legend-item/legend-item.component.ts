import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {TuiButton} from '@taiga-ui/core/components/button';
import {type TuiSizeS} from '@taiga-ui/core/types';

@Component({
    selector: 'tui-legend-item',
    imports: [TuiButton],
    templateUrl: './legend-item.template.html',
    styleUrl: './legend-item.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-size]': 'size()',
        '[class._disabled]': 'disabled()',
        '[style.--tui-background-accent-1]':
            'color() === "var(--tui-background-accent-1)" ? null : color()',
    },
})
export class TuiLegendItem {
    public readonly active = input(false);
    public readonly color = input('');
    public readonly text = input('');
    public readonly size = input<TuiSizeS>('m');
    public readonly disabled = input(false);
}
