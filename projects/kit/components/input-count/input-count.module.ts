import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiButtonModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputNumberModule} from '@taiga-ui/kit/components/input-number';
import {TextMaskModule, TuiValueAccessorModule} from '@taiga-ui/kit/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputCountComponent} from './input-count.component';
import {TuiInputCountDirective} from './input-count.directive';

/**
 * @deprecated use {@link TuiInputNumberComponent} with [step] instead
 */
@NgModule({
    imports: [
        CommonModule,
        TextMaskModule,
        FormsModule,
        TuiButtonModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiValueAccessorModule,
        PolymorpheusModule,
        TuiInputNumberModule,
    ],
    declarations: [TuiInputCountComponent, TuiInputCountDirective],
    exports: [TuiInputCountComponent, TuiInputCountDirective, TuiTextfieldComponent],
})
export class TuiInputCountModule {}
