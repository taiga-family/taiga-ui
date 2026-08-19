import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core/components/textfield';

import {TuiPincodeComponent} from './pincode.component';

export const TuiPincode = [
    TuiPincodeComponent,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
] as const;
