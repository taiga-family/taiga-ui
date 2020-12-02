import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core/components/svg';
import {TuiHintModule} from '@taiga-ui/core/directives/hint';

import {TuiTooltipComponent} from './tooltip.component';

@NgModule({
    imports: [CommonModule, TuiSvgModule, TuiHintModule],
    declarations: [TuiTooltipComponent],
    exports: [TuiTooltipComponent],
})
export class TuiTooltipModule {}
