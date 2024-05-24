import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {
    TuiButtonDirective,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
    TuiTextfieldLegacyComponent,
} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputNumberComponent} from './input-number.component';
import {TuiInputNumberDirective} from './input-number.directive';

@NgModule({
    imports: [
        CommonModule,
        MaskitoDirective,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiValueAccessorModule,
        PolymorpheusModule,
        TuiButtonDirective,
    ],
    declarations: [TuiInputNumberComponent, TuiInputNumberDirective],
    exports: [
        TuiInputNumberComponent,
        TuiInputNumberDirective,
        TuiTextfieldLegacyComponent,
    ],
})
export class TuiInputNumberModule {}
