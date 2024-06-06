import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiNumberFormatDirective} from '@taiga-ui/core';
import {TuiSlider} from '@taiga-ui/kit';
import {TuiInputNumberModule} from '@taiga-ui/legacy/components/input-number';
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputSliderComponent} from './input-slider.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiInputNumberModule,
        TuiNumberFormatDirective,
        TuiSlider,
        TuiTextfieldControllerModule,
    ],
    declarations: [TuiInputSliderComponent],
    exports: [TuiInputSliderComponent],
})
export class TuiInputSliderModule {}
