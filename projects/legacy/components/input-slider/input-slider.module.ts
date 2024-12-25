import {NgIf} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiTextfield} from '@taiga-ui/core/components/textfield';
import {TuiNumberFormat} from '@taiga-ui/core/directives/number-format';
import {TuiInputNumber} from '@taiga-ui/kit/components/input-number';
import {TuiSlider} from '@taiga-ui/kit/components/slider';
import {TuiTooltip} from '@taiga-ui/kit/directives/tooltip';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiInputSliderComponent} from './input-slider.component';

@NgModule({
    imports: [
        ...TuiSlider,
        ...TuiTextfield,
        FormsModule,
        NgIf,
        PolymorpheusOutlet,
        TuiIcon,
        TuiInputNumber,
        TuiNumberFormat,
        TuiTooltip,
    ],
    declarations: [TuiInputSliderComponent],
    exports: [TuiInputSliderComponent, ...TuiSlider],
})
export class TuiInputSliderModule {}
