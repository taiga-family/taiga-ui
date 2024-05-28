import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    TuiNumberFormatDirective,
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiRangeComponent} from '@taiga-ui/kit';
import {TuiInputNumberModule} from '@taiga-ui/legacy/components/input-number';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputRangeComponent} from './input-range.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiActiveZoneDirective,
        TuiInputNumberModule,
        TuiRangeComponent,
        TuiWrapperModule,
        TuiTextfieldControllerModule,
        TuiNumberFormatDirective,
    ],
    declarations: [TuiInputRangeComponent],
    exports: [TuiInputRangeComponent],
})
export class TuiInputRangeModule {}
