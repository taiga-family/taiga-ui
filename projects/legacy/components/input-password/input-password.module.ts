import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAppearanceDirective, TuiHint, TuiIcon} from '@taiga-ui/core';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy/directives';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiInputPasswordComponent} from './input-password.component';
import {TuiInputPasswordDirective} from './input-password.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiHint,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiAppearanceDirective,
        TuiIcon,
    ],
    declarations: [TuiInputPasswordComponent, TuiInputPasswordDirective],
    exports: [
        TuiInputPasswordComponent,
        TuiInputPasswordDirective,
        TuiTextfieldComponent,
    ],
})
export class TuiInputPasswordModule {}
