import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgComponent} from '@taiga-ui/core/components/svg';
import {TuiAppearanceDirective} from '@taiga-ui/core/directives';
import {TuiHint} from '@taiga-ui/core/directives/hint';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiTooltipComponent} from './tooltip.component';

@NgModule({
    imports: [
        CommonModule,
        TuiSvgComponent,
        TuiHint,
        PolymorpheusModule,
        TuiAppearanceDirective,
    ],
    declarations: [TuiTooltipComponent],
    exports: [TuiTooltipComponent],
})
export class TuiTooltipModule {}
