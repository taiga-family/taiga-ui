import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiHintModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
    TuiTextfieldComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputPasswordComponent} from './input-password.component';
import {TuiInputPasswordDirective} from './input-password.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiSvgModule,
        TuiHintModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
    ],
    declarations: [TuiInputPasswordComponent, TuiInputPasswordDirective],
    exports: [
        TuiInputPasswordComponent,
        TuiInputPasswordDirective,
        TuiTextfieldComponent,
    ],
})
export class TuiInputPasswordModule {}
