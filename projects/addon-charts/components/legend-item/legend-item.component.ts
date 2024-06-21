import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {TuiButton} from '@taiga-ui/core/components/button';
import type {TuiSizeS} from '@taiga-ui/core/types';

@Component({
    standalone: true,
    selector: 'tui-legend-item',
    imports: [TuiButton],
    templateUrl: './legend-item.template.html',
    styleUrls: ['./legend-item.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLegendItem {
    @Input()
    public active = false;

    @Input()
    public color = '';

    @Input()
    public text = '';

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeS = 'm';

    @Input()
    @HostBinding('class._disabled')
    public disabled = false;

    @HostBinding('style.--tui-background-accent-1')
    protected get computedColor(): string | null {
        return this.color === 'var(--tui-background-accent-1)' ? null : this.color;
    }
}
