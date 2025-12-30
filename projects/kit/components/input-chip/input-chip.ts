import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiTextfieldComponent,
    TuiTextfieldMultiComponent,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core/components/textfield';
import {TuiDropdownContent} from '@taiga-ui/core/portals/dropdown';

import {TuiInputChipComponent} from './input-chip.component';
import {TuiInputChipDirective} from './input-chip.directive';

export const TuiInputChip = [
    TuiItem,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
    TuiTextfieldMultiComponent,
    TuiDropdownContent,
    TuiInputChipDirective,
    TuiInputChipComponent,
] as const;
