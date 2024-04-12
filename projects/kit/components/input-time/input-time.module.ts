import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgComponent,
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
        MaskitoDirective,
        TuiSelectOptionModule,
        TuiDataListModule,
        TuiWrapperModule,
        TuiHostedDropdownModule,
        TuiPrimitiveTextfieldModule,
        TuiValueAccessorModule,
        TuiTextfieldControllerModule,
        TuiSvgComponent,
        PolymorpheusModule,
    ],
    declarations: [TuiInputTimeComponent, TuiNativeTimeComponent, TuiInputTimeDirective],
    exports: [TuiInputTimeComponent, TuiInputTimeDirective],
})
export class TuiInputTimeModule {}
