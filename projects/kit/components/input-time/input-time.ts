import {TuiTextfield} from '@taiga-ui/core/components/textfield';

import {TuiInputTimeComponent} from './input-time.component';
import {TuiInputTimeDirective} from './input-time.directive';

export const TuiInputTime = [
    TuiInputTimeDirective,
    TuiInputTimeComponent,
    TuiTextfield,
] as const;
