import {TuiTextfield} from '@taiga-ui/core/components/textfield';

import {TuiInputColorComponent} from './input-color.component';

export const TuiInputColor = [TuiInputColorComponent, ...TuiTextfield] as const;
