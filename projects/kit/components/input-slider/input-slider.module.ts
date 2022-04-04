import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiFocusableModule, TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiFormatNumberPipeModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputNumberModule} from '@taiga-ui/kit/components/input-number';
import {TuiSliderModule} from '@taiga-ui/kit/components/slider';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {
    TuiInputSliderComponent,
    TuiNewInputSliderDirective,
} from './input-slider.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiFocusableModule,
        TuiSliderModule,
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
