import {TuiTextfield} from '@taiga-ui/core/components/textfield';

import {TuiInputPhoneInternationalComponent} from './input-phone-international.component';

export const TuiInputPhoneInternational = [
    TuiInputPhoneInternationalComponent,
    ...TuiTextfield,
] as const;
