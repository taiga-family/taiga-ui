import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {TuiHostedDropdownModule} from '@taiga-ui/legacy/components/hosted-dropdown';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';

import {TuiInputComponent} from './input.component';
import {TuiInputDirective} from './input.directive';

@NgModule({
    imports: [
        CommonModule,
        TuiActiveZoneDirective,
        TuiPrimitiveTextfieldModule,
        TuiHostedDropdownModule,
    ],
    declarations: [TuiInputComponent, TuiInputDirective],
    exports: [TuiInputComponent, TuiInputDirective, TuiTextfieldComponent],
})
export class TuiInputModule {}
