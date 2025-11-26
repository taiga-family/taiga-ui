import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core/components/textfield';
import {TuiDropdownContent} from '@taiga-ui/core/portals';

import {TuiTextareaComponent} from './textarea.component';
import {TuiTextareaDirective} from './textarea.directive';

export const TuiTextarea = [
    TuiTextareaComponent,
    TuiTextareaDirective,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
    TuiDropdownContent,
] as const;
