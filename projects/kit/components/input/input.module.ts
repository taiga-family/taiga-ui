import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {TuiHostedDropdownModule, TuiPrimitiveTextfieldModule} from '@taiga-ui/core';
import {TextMaskModule} from 'angular2-text-mask';
import {TuiInputComponent} from './input.component';

@NgModule({
    imports: [
        CommonModule,
        TextMaskModule,
        TuiActiveZoneModule,
        TuiPrimitiveTextfieldModule,
        TuiHostedDropdownModule,
    ],
    declarations: [TuiInputComponent],
    exports: [TuiInputComponent],
})
export class TuiInputModule {}
