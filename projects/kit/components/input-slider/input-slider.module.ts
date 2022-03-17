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
    TuiTextfieldControllerModule,
    TuiTooltipModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiInputNumberModule} from '@taiga-ui/kit/components/input-number';
import {TuiSliderModule} from '@taiga-ui/kit/components/slider';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
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
        PolymorpheusModule,
        TuiInputNumberModule,
        TuiTextfieldControllerModule,
    ],
    declarations: [TuiInputSliderComponent, TuiNewInputSliderDirective],
    exports: [TuiInputSliderComponent, TuiNewInputSliderDirective],
})
export class TuiInputSliderModule {}
