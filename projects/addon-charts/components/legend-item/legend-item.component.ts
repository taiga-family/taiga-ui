import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {TuiColor} from '@taiga-ui/core';

@Component({
    selector: 'tui-legend-item',
    templateUrl: './legend-item.template.html',
    styleUrls: ['./legend-item.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLegendItemComponent {
    @Input()
    @tuiDefaultProp()
    active = false;

    @Input()
    @tuiDefaultProp()
    color: TuiColor | string = '';

    @Input()
    @tuiDefaultProp()
    text = '';
}
