import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TuiNumberFormat} from '@taiga-ui/core/directives/number-format';
import {TuiRangeComponent} from '@taiga-ui/kit/components/range';
import {TuiInputNumberModule} from '@taiga-ui/legacy/components/input-number';
import {
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/legacy/directives';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiInputRangeComponent} from './input-range.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiActiveZone,
        TuiInputNumberModule,
        TuiRangeComponent,
        TuiWrapperModule,
        TuiTextfieldControllerModule,
        TuiNumberFormat,
    ],
    declarations: [TuiInputRangeComponent],
    exports: [TuiInputRangeComponent],
})
export class TuiInputRangeModule {}
