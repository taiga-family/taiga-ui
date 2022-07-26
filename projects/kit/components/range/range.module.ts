import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiFocusableModule} from '@taiga-ui/cdk';
import {TuiSliderModule} from '@taiga-ui/kit/components/slider';

import {TuiNewRangeDirective, TuiRangeComponent} from './range.component';
import {TuiRangeChangeDirective} from './range-change.directive';

@NgModule({
    imports: [CommonModule, TuiFocusableModule, TuiSliderModule, FormsModule],
    declarations: [TuiRangeComponent, TuiRangeChangeDirective, TuiNewRangeDirective],
    exports: [TuiRangeComponent, TuiRangeChangeDirective, TuiNewRangeDirective],
})
export class TuiRangeModule {}
