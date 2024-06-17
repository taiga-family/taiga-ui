import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiActiveZone} from '@taiga-ui/cdk';
import {TuiNumberFormatDirective} from '@taiga-ui/core';
import {TuiRangeComponent} from '@taiga-ui/kit';
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
        TuiNumberFormatDirective,
    ],
    declarations: [TuiInputRangeComponent],
    exports: [TuiInputRangeComponent],
})
export class TuiInputRangeModule {}
