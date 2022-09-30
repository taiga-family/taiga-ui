import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiFocusableModule} from '@taiga-ui/cdk';
import {TuiInputNumberModule} from '@taiga-ui/kit/components/input-number';
import {TuiSliderModule} from '@taiga-ui/kit/components/slider';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputSliderComponent} from './input-slider.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiFocusableModule,
        TuiInputNumberModule,
        TuiSliderModule,
    ],
    declarations: [TuiInputSliderComponent],
    exports: [TuiInputSliderComponent],
})
export class TuiInputSliderModule {}
