import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiHint} from '@taiga-ui/core/directives/hint';
import {TuiWrapperModule} from '@taiga-ui/legacy/directives';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiTooltipComponent} from './tooltip.component';

/**
 * @deprecated: drop in v5.0 use {@link TuiTooltip}
 * https://taiga-ui.dev/components/tooltip
 */
@NgModule({
    imports: [CommonModule, TuiIcon, PolymorpheusOutlet, ...TuiHint, TuiWrapperModule],
    declarations: [TuiTooltipComponent],
    exports: [TuiTooltipComponent],
})
export class TuiTooltipModule {}
