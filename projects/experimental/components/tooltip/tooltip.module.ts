import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiHintModule, TuiIconComponent} from '@taiga-ui/core';
import {TuiButtonModule} from '@taiga-ui/experimental/components/button';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiTooltipComponent} from './tooltip.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiHintModule,
        TuiIconComponent,
        PolymorpheusModule,
    ],
    declarations: [TuiTooltipComponent],
    exports: [TuiTooltipComponent],
})
export class TuiTooltipModule {}
