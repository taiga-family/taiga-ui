import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TuiButton} from '@taiga-ui/core/components/button';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {
    TuiTextfieldControllerModule,
    TuiValueAccessorModule,
} from '@taiga-ui/legacy/directives';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiInputNumberComponent} from './input-number.component';
import {TuiInputNumberDirective} from './input-number.directive';

/**
 * @deprecated: drop in v5.0
 */
@NgModule({
    imports: [
        CommonModule,
        MaskitoDirective,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiValueAccessorModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiButton,
    ],
    declarations: [TuiInputNumberComponent, TuiInputNumberDirective],
    exports: [TuiInputNumberComponent, TuiInputNumberDirective, TuiTextfieldComponent],
})
export class TuiInputNumberModule {}
