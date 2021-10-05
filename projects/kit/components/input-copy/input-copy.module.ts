import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiHintModule,
    TuiNotificationsModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiInputCopyComponent} from './input-copy.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiSvgModule,
        TuiHintModule,
        TuiPrimitiveTextfieldModule,
        TuiNotificationsModule,
    ],
    declarations: [TuiInputCopyComponent],
    exports: [TuiInputCopyComponent],
})
export class TuiInputCopyModule {}
