import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TextMaskModule} from 'angular2-text-mask';
import {TuiInputTimeComponent} from './input-time.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TextMaskModule,
        TuiDataListModule,
        TuiHostedDropdownModule,
        TuiPrimitiveTextfieldModule,
        TuiSvgModule,
        TuiValueAccessorModule,
    ],
    declarations: [TuiInputTimeComponent],
    exports: [TuiInputTimeComponent],
})
export class TuiInputTimeModule {}
