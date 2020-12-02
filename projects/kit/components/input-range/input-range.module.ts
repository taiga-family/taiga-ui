import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    TuiActiveZoneModule,
    TuiFocusableModule,
    TuiFocusedModule,
    TuiHoveredModule,
    TuiInputModeModule,
    TuiMapperPipeModule,
    TuiPressedModule,
} from '@taiga-ui/cdk';
import {TuiPluralizePipeModule, TuiWrapperModule} from '@taiga-ui/core';
import {TuiRangeModule} from '@taiga-ui/kit/components/range';
import {TextMaskModule} from 'angular2-text-mask';

import {TuiInputRangeComponent} from './input-range.component';

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
        TuiActiveZoneModule,
        TuiPluralizePipeModule,
        TuiRangeModule,
        TuiWrapperModule,
    ],
    declarations: [TuiInputRangeComponent],
    exports: [TuiInputRangeComponent],
})
export class TuiInputRangeModule {}
