import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core/components/textfield';
import {TuiDropdownContent} from '@taiga-ui/core/portals';

import {TuiInputPinComponent} from './input-pin.component';

export const TuiInputPin = [
    TuiInputPinComponent,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
    TuiDropdownContent,
] as const;
