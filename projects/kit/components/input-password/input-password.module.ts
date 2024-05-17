import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiHint,
    TuiPrimitiveTextfieldModule,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
    TuiTextfieldLegacyComponent,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputPasswordComponent} from './input-password.component';
import {TuiInputPasswordDirective} from './input-password.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiWrapperModule,
        TuiSvgComponent,
        TuiHint,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
    ],
    declarations: [TuiInputPasswordComponent, TuiInputPasswordDirective],
    exports: [
        TuiInputPasswordComponent,
        TuiInputPasswordDirective,
        TuiTextfieldLegacyComponent,
    ],
})
export class TuiInputPasswordModule {}
