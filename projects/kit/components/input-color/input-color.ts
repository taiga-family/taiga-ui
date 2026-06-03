import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core/components/textfield';
import {TuiDropdownContent} from '@taiga-ui/core/portals/dropdown';

import {TuiInputColorContent} from './input-color-content.component';
import {TuiInputColorComponent} from './input-color.component';

export const TuiInputColor = [
    TuiInputColorComponent,
    TuiInputColorContent,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
    TuiDropdownContent,
] as const;
