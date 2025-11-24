import {TuiTextfield} from '@taiga-ui/core/components/textfield';

import {TuiInputChipComponent} from './input-chip.component';
import {TuiInputChipDirective} from './input-chip.directive';

export const TuiInputChip = [
    TuiTextfield,
    TuiInputChipDirective,
    TuiInputChipComponent,
] as const;
