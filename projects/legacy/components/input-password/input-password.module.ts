import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiHint, TuiSvgComponent} from '@taiga-ui/core';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/legacy/directives';
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
        TuiTextfieldComponent,
    ],
})
export class TuiInputPasswordModule {}
