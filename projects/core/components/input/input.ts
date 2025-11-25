import {TuiTextfield} from '@taiga-ui/core/components/textfield';

import {TuiInputDirective} from './input.directive';

export const TuiInput = [TuiTextfield, TuiInputDirective] as const;
