import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import type {TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: `tui-legend-item`,
    templateUrl: `./legend-item.template.html`,
    styleUrls: [`./legend-item.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLegendItemComponent {
    @Input()
    @tuiDefaultProp()
    active = false;

    @Input()
    @tuiDefaultProp()
    color = ``;

    @Input()
    @tuiDefaultProp()
    text = ``;

    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size: TuiSizeS = `m`;

    @Input()
    @HostBinding(`class._disabled`)
    disabled = false;

    @HostBinding(`style.--tui-primary`)
    get computedColor(): string | null {
        return this.color === `var(--tui-primary)` ? null : this.color;
    }
}
