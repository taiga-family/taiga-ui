import {TuiTextfield} from '@taiga-ui/core/components/textfield';

import {TuiInputPinComponent} from './input-pin.component';

export const TuiInputPin = [TuiInputPinComponent, ...TuiTextfield] as const;
