import {NgModule} from '@angular/core';
import {MaskitoDirective, MaskitoPipe} from '@maskito/angular';
import {
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
    TuiTextfieldComponent,
    TuiTextfieldControllerModule,
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
        TuiSvgModule,
    ],
    declarations: [TuiInputCardComponent, TuiInputCardDirective],
    exports: [TuiInputCardComponent, TuiInputCardDirective, TuiTextfieldComponent],
})
export class TuiInputCardModule {}
