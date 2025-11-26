import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core/components/textfield';
import {TuiDropdownContent} from '@taiga-ui/core/portals';

import {TuiInputTimeComponent} from './input-time.component';
import {TuiInputTimeDirective} from './input-time.directive';

export const TuiInputTime = [
    TuiInputTimeDirective,
    TuiInputTimeComponent,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
    TuiDropdownContent,
] as const;
