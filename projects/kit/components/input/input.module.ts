import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {TuiHostedDropdownModule, TuiPrimitiveTextfieldModule} from '@taiga-ui/core';
import {TuiInputComponent} from './input.component';

@NgModule({
    imports: [
        CommonModule,
        TuiActiveZoneModule,
        TuiPrimitiveTextfieldModule,
        TuiHostedDropdownModule,
    ],
    declarations: [TuiInputComponent],
    exports: [TuiInputComponent],
})
export class TuiInputModule {}
