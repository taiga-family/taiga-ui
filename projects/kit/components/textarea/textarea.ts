import {TuiTextfield} from '@taiga-ui/core/components/textfield';

import {TuiTextareaComponent} from './textarea.component';
import {TuiTextareaDirective} from './textarea.directive';

export const TuiTextarea = [
    TuiTextareaComponent,
    TuiTextareaDirective,
    TuiTextfield,
] as const;
