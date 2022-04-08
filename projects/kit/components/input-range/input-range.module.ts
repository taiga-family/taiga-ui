import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiActiveZoneModule, TuiPressedModule} from '@taiga-ui/cdk';
import {TuiTextfieldControllerModule, TuiWrapperModule} from '@taiga-ui/core';
import {TuiInputNumberModule} from '@taiga-ui/kit/components/input-number';
import {TuiNewRangeDirective, TuiRangeModule} from '@taiga-ui/kit/components/range';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {
    TuiInputRangeComponent,
    TuiTextfieldAppearanceDirective,
} from './input-range.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PolymorpheusModule,
        TuiActiveZoneModule,
        TuiInputNumberModule,
        TuiPressedModule,
        TuiRangeModule,
        TuiTextfieldControllerModule,
        TuiWrapperModule,
    ],
    declarations: [TuiInputRangeComponent, TuiTextfieldAppearanceDirective],
    exports: [TuiInputRangeComponent, TuiNewRangeDirective],
})
export class TuiInputRangeModule {}
