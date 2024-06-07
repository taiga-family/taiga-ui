import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TuiButtonDirective} from '@taiga-ui/core';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {
    TuiTextfieldControllerModule,
    TuiValueAccessorModule,
} from '@taiga-ui/legacy/directives';
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
    exports: [TuiInputNumberComponent, TuiInputNumberDirective, TuiTextfieldComponent],
})
export class TuiInputNumberModule {}
