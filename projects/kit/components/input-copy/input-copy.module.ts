import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiHintModule,
    TuiNotificationsModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TextMaskModule} from 'angular2-text-mask';
import {TuiInputCopyComponent} from './input-copy.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiSvgModule,
        TuiHintModule,
        TuiPrimitiveTextfieldModule,
        TextMaskModule,
        TuiNotificationsModule,
    ],
    declarations: [TuiInputCopyComponent],
    exports: [TuiInputCopyComponent],
})
export class TuiInputCopyModule {}
