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
    TuiRepeatTimesModule,
} from '@taiga-ui/cdk';
import {
    TuiFormatNumberPipeModule,
    TuiTooltipModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiSliderModule} from '@taiga-ui/kit/components/slider';
import {TextMaskModule} from 'angular2-text-mask';

import {
    TuiInputSliderComponent,
    TuiNewInputSliderDirective,
} from './input-slider.component';

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
        TuiFormatNumberPipeModule,
        TuiRepeatTimesModule,
    ],
    declarations: [TuiInputSliderComponent, TuiNewInputSliderDirective],
    exports: [TuiInputSliderComponent, TuiNewInputSliderDirective],
})
export class TuiInputSliderModule {}
