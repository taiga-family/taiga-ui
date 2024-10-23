import {NgModule} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiTooltip} from '@taiga-ui/kit/directives/tooltip';

import {TuiTooltipComponent} from './tooltip.component';

/**
 * @deprecated: drop in v5.0 use {@link TuiTooltip}
 * https://taiga-ui.dev/components/tooltip
 */
@NgModule({
    imports: [TuiIcon, TuiTooltip],
    declarations: [TuiTooltipComponent],
    exports: [TuiTooltipComponent],
})
export class TuiTooltipModule {}
