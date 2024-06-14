import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {
    TuiCalendarYear,
    TuiDropdown,
    TuiDropdownOpen,
    TuiScrollbar,
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
        TuiDropdown,
        TuiDropdownOpen,
        TuiPrimitiveTextfieldModule,
        TuiScrollbar,
        TuiCalendarYear,
        TuiTextfieldControllerModule,
    ],
    declarations: [TuiInputYearComponent, TuiInputYearDirective],
    exports: [TuiInputYearComponent, TuiInputYearDirective, TuiTextfieldComponent],
})
export class TuiInputYearModule {}
