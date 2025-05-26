import {TuiItem} from '@taiga-ui/cdk/directives/item';

import {TuiInputChipComponent} from './input-chip.component';
import {TuiInputChipDirective} from './input-chip.directive';

export const TuiInputChip = [
    TuiInputChipDirective,
    TuiInputChipComponent,
    TuiItem,
] as const;
