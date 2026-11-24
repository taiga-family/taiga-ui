import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {TuiCalendar} from '@taiga-ui/core/components/calendar';
import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiTextfieldComponent,
    TuiTextfieldMultiComponent,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core/components/textfield';
import {TuiDropdownContent} from '@taiga-ui/core/portals/dropdown';
import {
    TuiInputChipComponent,
    TuiInputChipDirective,
} from '@taiga-ui/kit/components/input-chip';

import {TuiInputDateMultiDirective} from './input-date-multi.directive';

// Explicit imports keep the published tuple statically analyzable by Angular.
export const TuiInputDateMulti = [
    TuiInputDateMultiDirective,
    TuiCalendar,
    TuiItem,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
    TuiTextfieldMultiComponent,
    TuiDropdownContent,
    TuiInputChipDirective,
    TuiInputChipComponent,
] as const;
