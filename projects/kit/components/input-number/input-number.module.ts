import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskitoModule} from '@maskito/angular';
import {
    TuiButtonModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputNumberComponent} from './input-number.component';
import {TuiInputNumberDirective} from './input-number.directive';

@NgModule({
    imports: [
        CommonModule,
        MaskitoModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiValueAccessorModule,
        PolymorpheusModule,
        TuiButtonModule,
    ],
    declarations: [TuiInputNumberComponent, TuiInputNumberDirective],
    exports: [TuiInputNumberComponent, TuiInputNumberDirective, TuiTextfieldComponent],
})
export class TuiInputNumberModule {}
