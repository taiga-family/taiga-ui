import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiNumberFormat} from '@taiga-ui/core/directives/number-format';
import {TuiSlider} from '@taiga-ui/kit/components/slider';
import {TuiInputNumberModule} from '@taiga-ui/legacy/components/input-number';
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy/directives';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiInputSliderComponent} from './input-slider.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiInputNumberModule,
        TuiNumberFormat,
        TuiTextfieldControllerModule,
        ...TuiSlider,
    ],
    declarations: [TuiInputSliderComponent],
    exports: [TuiInputSliderComponent, ...TuiSlider],
})
export class TuiInputSliderModule {}
