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
import {TuiValueAccessorModule} from '@taiga-ui/kit/directives';

import {TuiInputCountComponent} from './input-count.component';
import {TuiInputCountDirective} from './input-count.directive';

/**
 * @deprecated use {@link TuiInputNumberComponent} with [step] instead
 */
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiButtonModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiValueAccessorModule,
        TuiInputNumberModule,
    ],
    declarations: [TuiInputCountComponent, TuiInputCountDirective],
    exports: [TuiInputCountComponent, TuiInputCountDirective, TuiTextfieldComponent],
})
export class TuiInputCountModule {}
