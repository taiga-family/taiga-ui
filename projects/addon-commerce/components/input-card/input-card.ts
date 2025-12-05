import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core/components/textfield';
import {TuiDropdownContent} from '@taiga-ui/core/portals/dropdown';

import {TuiInputCardComponent} from './input-card.component';
import {TuiInputCVCDirective} from './input-cvc.directive';
import {TuiInputExpireDirective} from './input-expire.directive';

export const TuiInputCard = [
    TuiInputCardComponent,
    TuiInputCVCDirective,
    TuiInputExpireDirective,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
    TuiDropdownContent,
] as const;
