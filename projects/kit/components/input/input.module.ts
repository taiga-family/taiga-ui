import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiHostedDropdownModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/core';

import {TuiInputComponent} from './input.component';
import {TuiInputDirective} from './input.directive';

@NgModule({
    imports: [
        CommonModule,
        TuiActiveZoneModule,
        TuiPrimitiveTextfieldModule,
        TuiHostedDropdownModule,
    ],
    declarations: [TuiInputComponent, TuiInputDirective],
    exports: [TuiInputComponent, TuiInputDirective, TuiTextfieldComponent],
})
export class TuiInputModule {}
