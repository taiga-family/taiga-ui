import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core/components/textfield';
import {TuiDropdownContent} from '@taiga-ui/core/portals/dropdown';

import {TuiInputPhoneInternationalComponent} from './input-phone-international.component';
import {TuiInputPhoneInternationalContent} from './input-phone-international-content.component';

export const TuiInputPhoneInternational = [
    TuiInputPhoneInternationalComponent,
    TuiInputPhoneInternationalContent,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
    TuiDropdownContent,
] as const;
