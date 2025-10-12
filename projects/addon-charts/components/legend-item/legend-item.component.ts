import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TuiButton} from '@taiga-ui/core/components/button';
import {type TuiSizeS} from '@taiga-ui/core/types';

@Component({
    selector: 'tui-legend-item',
    imports: [TuiButton],
    templateUrl: './legend-item.template.html',
    styleUrl: './legend-item.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-size]': 'size',
        '[class._disabled]': 'disabled',
        '[style.--tui-background-accent-1]': 'computedColor',
    },
})
export class TuiLegendItem {
    @Input()
    public active = false;

    @Input()
    public color = '';

    @Input()
    public text = '';

    @Input()
    public size: TuiSizeS = 'm';

    @Input()
    public disabled = false;

    protected get computedColor(): string | null {
        return this.color === 'var(--tui-background-accent-1)' ? null : this.color;
    }
}
