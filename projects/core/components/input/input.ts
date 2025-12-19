import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core/components/textfield';
import {TuiDropdownContent} from '@taiga-ui/core/portals/dropdown';

import {TuiInputDirective} from './input.directive';

export const TuiInput = [
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
    TuiDropdownContent,
    TuiInputDirective,
] as const;
