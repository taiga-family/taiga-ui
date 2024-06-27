import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';
import {TuiHint} from '@taiga-ui/core/directives/hint';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiTooltipComponent} from './tooltip.component';

/**
 * @deprecated: drop in v5.0
 */
@NgModule({
    imports: [CommonModule, TuiIcon, PolymorpheusOutlet, TuiAppearance, ...TuiHint],
    declarations: [TuiTooltipComponent],
    exports: [TuiTooltipComponent],
})
export class TuiTooltipModule {}
