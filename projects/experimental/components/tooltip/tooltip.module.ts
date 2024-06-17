import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButton, TuiHint, TuiIconComponent} from '@taiga-ui/core';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiTooltipComponent} from './tooltip.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButton,
        TuiHint,
        TuiIconComponent,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
    ],
    declarations: [TuiTooltipComponent],
    exports: [TuiTooltipComponent],
})
export class TuiTooltipModule {}
