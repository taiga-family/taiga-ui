import {TuiTextfield} from '@taiga-ui/core/components/textfield';

import {TuiInputCardComponent} from './input-card.component';
import {TuiInputCVCDirective} from './input-cvc.directive';
import {TuiInputExpireDirective} from './input-expire.directive';

export const TuiInputCard = [
    TuiInputCardComponent,
    TuiInputCVCDirective,
    TuiInputExpireDirective,
    TuiTextfield,
] as const;
