import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiSelectOptionModule} from '@taiga-ui/kit/components/select-option';
import {TextMaskModule, TuiValueAccessorModule} from '@taiga-ui/kit/directives';

import {TuiInputTimeComponent} from './input-time.component';
import {TuiNativeTimeComponent} from '@taiga-ui/kit/components/input-time/native-time/native-time.component';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiInputTimeDirective} from '@taiga-ui/kit/components/input-time/input-time.directive';

@NgModule({
    imports: [
        CommonModule,
        TextMaskModule,
        TuiSelectOptionModule,
        TuiDataListModule,
        TuiWrapperModule,
        TuiHostedDropdownModule,
        TuiPrimitiveTextfieldModule,
        TuiValueAccessorModule,
        TuiTextfieldControllerModule,
        TuiSvgModule,
        PolymorpheusModule,
    ],
    declarations: [TuiInputTimeComponent, TuiNativeTimeComponent, TuiInputTimeDirective],
    exports: [TuiInputTimeComponent, TuiInputTimeDirective],
})
export class TuiInputTimeModule {}
