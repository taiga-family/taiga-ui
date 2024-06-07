import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import {TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiCalendarComponent, TuiLinkDirective, TuiSvgComponent} from '@taiga-ui/core';
import {TuiHostedDropdownModule} from '@taiga-ui/legacy/components/hosted-dropdown';
import {TuiInputTagModule} from '@taiga-ui/legacy/components/input-tag';
import {TuiPrimitiveTextfieldModule} from '@taiga-ui/legacy/components/primitive-textfield';
import {
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/legacy/directives';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputDateMultiComponent} from './input-date-multi.component';

@NgModule({
    imports: [
        CommonModule,
        MaskitoDirective,
        PolymorpheusModule,
        TuiWrapperModule,
        TuiCalendarComponent,
        TuiSvgComponent,
        TuiLinkDirective,
        TuiInputTagModule,
        FormsModule,
        TuiMapperPipe,
        TuiHostedDropdownModule,
        TuiTextfieldControllerModule,
        TuiPrimitiveTextfieldModule,
    ],
    declarations: [TuiInputDateMultiComponent],
    exports: [TuiInputDateMultiComponent],
})
export class TuiInputDateMultiModule {}
