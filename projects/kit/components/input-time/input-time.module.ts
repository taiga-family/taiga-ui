import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskitoModule} from '@maskito/angular';
import {
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiSelectOptionModule} from '@taiga-ui/kit/components/select-option';
import {TuiValueAccessorModule} from '@taiga-ui/kit/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputTimeComponent} from './input-time.component';
import {TuiInputTimeDirective} from './input-time.directive';
import {TuiNativeTimeComponent} from './native-time/native-time.component';

@NgModule({
    imports: [
        CommonModule,
        MaskitoModule,
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
