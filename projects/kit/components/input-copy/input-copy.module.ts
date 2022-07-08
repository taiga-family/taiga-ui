import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiAlertModule,
    TuiHintModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
    TuiTextfieldComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputCopyComponent} from './input-copy.component';
import {TuiInputCopyDirective} from './input-copy.directive';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiSvgModule,
        TuiHintModule,
        TuiPrimitiveTextfieldModule,
        TuiAlertModule,
        TuiTextfieldControllerModule,
    ],
    declarations: [TuiInputCopyComponent, TuiInputCopyDirective],
    exports: [TuiInputCopyComponent, TuiInputCopyDirective, TuiTextfieldComponent],
})
export class TuiInputCopyModule {}
