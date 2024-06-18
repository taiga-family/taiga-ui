import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiAppearance, TuiHint, TuiIcon} from '@taiga-ui/core';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiTooltipComponent} from './tooltip.component';

@NgModule({
    imports: [CommonModule, TuiIcon, PolymorpheusOutlet, TuiAppearance, ...TuiHint],
    declarations: [TuiTooltipComponent],
    exports: [TuiTooltipComponent],
})
export class TuiTooltip {}
