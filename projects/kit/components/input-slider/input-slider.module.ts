import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    TuiFocusableModule,
    TuiFocusedModule,
    TuiHoveredModule,
    TuiInputModeModule,
    TuiMapperPipeModule,
    TuiPressedModule,
} from '@taiga-ui/cdk';
import {TuiTooltipModule, TuiWrapperModule} from '@taiga-ui/core';
import {TuiSliderModule} from '@taiga-ui/kit/components/slider';
import {TextMaskModule} from 'angular2-text-mask';

import {TuiInputSliderComponent} from './input-slider.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TextMaskModule,
        TuiFocusableModule,
        TuiFocusedModule,
        TuiHoveredModule,
        TuiPressedModule,
        TuiMapperPipeModule,
        TuiInputModeModule,
        TuiTooltipModule,
        TuiSliderModule,
        TuiWrapperModule,
    ],
    declarations: [TuiInputSliderComponent],
    exports: [TuiInputSliderComponent],
})
export class TuiInputSliderModule {}
