import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiNumberFormatDirective} from '@taiga-ui/core';
import {TuiSlider} from '@taiga-ui/kit';
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
        TuiNumberFormatDirective,
        TuiSlider,
        TuiTextfieldControllerModule,
    ],
    declarations: [TuiInputSliderComponent],
    exports: [TuiInputSliderComponent],
})
export class TuiInputSliderModule {}
