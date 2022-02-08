import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiButtonModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TextMaskModule} from 'angular2-text-mask';

import {TuiInputCountComponent} from './input-count.component';
import {TuiInputCountDirective} from './input-count.directive';

@NgModule({
    imports: [
        CommonModule,
        TextMaskModule,
        TuiButtonModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiValueAccessorModule,
        PolymorpheusModule,
    ],
    declarations: [TuiInputCountComponent, TuiInputCountDirective],
    exports: [TuiInputCountComponent, TuiInputCountDirective, TuiTextfieldComponent],
})
export class TuiInputCountModule {}
