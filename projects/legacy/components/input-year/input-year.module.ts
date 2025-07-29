import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TuiCalendarYear} from '@taiga-ui/core/components/calendar';
import {TuiScrollbar} from '@taiga-ui/core/components/scrollbar';
import {TuiDropdown, TuiDropdownOpen} from '@taiga-ui/core/directives/dropdown';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy/directives';

import {TuiInputYearComponent} from './input-year.component';
import {TuiInputYearDirective} from './input-year.directive';

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/input-year TuiInputYear} (from @taiga-ui/kit) instead
 */
@NgModule({
    imports: [
        MaskitoDirective,
        TuiDropdownOpen,
        TuiPrimitiveTextfieldModule,
        TuiScrollbar,
        TuiCalendarYear,
        TuiTextfieldControllerModule,
        ...TuiDropdown,
    ],
    declarations: [TuiInputYearComponent, TuiInputYearDirective],
    exports: [
        TuiInputYearComponent,
        TuiInputYearDirective,
        TuiTextfieldComponent,
        ...TuiDropdown,
    ],
})
export class TuiInputYearModule {}
