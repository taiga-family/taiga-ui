import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {
    TuiCalendarYearComponent,
    TuiDropdownModule,
    TuiDropdownOpenDirective,
    TuiScrollbarComponent,
} from '@taiga-ui/core';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy/directives';

import {TuiInputYearComponent} from './input-year.component';
import {TuiInputYearDirective} from './input-year.directive';

@NgModule({
    imports: [
        MaskitoDirective,
        TuiDropdownModule,
        TuiDropdownOpenDirective,
        TuiPrimitiveTextfieldModule,
        TuiScrollbarComponent,
        TuiCalendarYearComponent,
        TuiTextfieldControllerModule,
    ],
    declarations: [TuiInputYearComponent, TuiInputYearDirective],
    exports: [TuiInputYearComponent, TuiInputYearDirective, TuiTextfieldComponent],
})
export class TuiInputYearModule {}
