import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TuiHintOptionsDirective} from '@taiga-ui/core/directives/hint';

/**
 * @deprecated: drop in v5.0 use {@link TuiTooltip}
 * https://taiga-ui.dev/components/tooltip
 */
@Component({
    standalone: false,
    selector: 'tui-tooltip',
    templateUrl: './tooltip.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    inputs: ['content', 'direction', 'appearance', 'showDelay', 'hideDelay'],
})
export class TuiTooltipComponent<C = any> extends TuiHintOptionsDirective {
    @Input()
    public describeId = '';

    @Input()
    public context?: C;
}
