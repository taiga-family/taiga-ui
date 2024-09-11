import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';
import {TuiHint} from '@taiga-ui/core/directives/hint';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy/directives';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiInputPasswordComponent} from './input-password.component';
import {TuiInputPasswordDirective} from './input-password.directive';

/**
 * @deprecated use {@link TuiPassword} with {@link TuiTextfield}
 */
@NgModule({
    imports: [
        ...TuiHint,
        CommonModule,
        FormsModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiAppearance,
        TuiIcon,
    ],
    declarations: [TuiInputPasswordComponent, TuiInputPasswordDirective],
    exports: [
        TuiInputPasswordComponent,
        TuiInputPasswordDirective,
        TuiTextfieldComponent,
        ...TuiHint,
    ],
})
export class TuiInputPasswordModule {}
