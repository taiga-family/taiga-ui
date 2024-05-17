import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgComponent} from '@taiga-ui/core/components/svg';
import {TuiHint} from '@taiga-ui/core/directives/hint';
import {TuiWrapperModule} from '@taiga-ui/core/directives/wrapper';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiTooltipComponent} from './tooltip.component';

@NgModule({
    imports: [
        CommonModule,
        TuiWrapperModule,
        TuiSvgComponent,
        TuiHint,
        PolymorpheusModule,
    ],
    declarations: [TuiTooltipComponent],
    exports: [TuiTooltipComponent],
})
export class TuiTooltipModule {}
