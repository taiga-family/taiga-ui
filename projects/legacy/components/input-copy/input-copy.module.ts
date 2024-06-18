import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiAppearance, TuiHint, TuiIcon} from '@taiga-ui/core';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy/directives';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiInputCopyComponent} from './input-copy.component';
import {TuiInputCopyDirective} from './input-copy.directive';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiAppearance,
        TuiIcon,
        ...TuiHint,
    ],
    declarations: [TuiInputCopyComponent, TuiInputCopyDirective],
    exports: [
        TuiInputCopyComponent,
        TuiInputCopyDirective,
        TuiTextfieldComponent,
        ...TuiHint,
    ],
})
export class TuiInputCopyModule {}
