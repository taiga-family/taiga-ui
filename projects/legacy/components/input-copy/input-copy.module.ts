import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
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

import {TuiInputCopyComponent} from './input-copy.component';
import {TuiInputCopyDirective} from './input-copy.directive';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiWrapperModule,
        TuiSvgComponent,
        TuiHint,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
    ],
    declarations: [TuiInputCopyComponent, TuiInputCopyDirective],
    exports: [TuiInputCopyComponent, TuiInputCopyDirective, TuiTextfieldComponent],
})
export class TuiInputCopyModule {}
