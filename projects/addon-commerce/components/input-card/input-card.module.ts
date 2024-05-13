import {NgModule} from '@angular/core';
import {MaskitoDirective, MaskitoPipe} from '@maskito/angular';
import {
    TuiPrimitiveTextfieldModule,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
    TuiTextfieldLegacyComponent,
} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit';

import {TuiInputCardComponent} from './input-card.component';
import {TuiInputCardDirective} from './input-card.directive';

@NgModule({
    imports: [
        MaskitoDirective,
        MaskitoPipe,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiValueAccessorModule,
        TuiSvgComponent,
    ],
    declarations: [TuiInputCardComponent, TuiInputCardDirective],
    exports: [TuiInputCardComponent, TuiInputCardDirective, TuiTextfieldLegacyComponent],
})
export class TuiInputCardModule {}
