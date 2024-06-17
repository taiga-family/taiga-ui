import {TuiLabel} from '@taiga-ui/core/components/label';

import {TuiSelectDirective} from './select.directive';
import {TuiTextfieldComponent} from './textfield.component';
import {TuiTextfieldDirective} from './textfield.directive';
import {TuiTextfieldOptionsDirective} from './textfield.options';

export const TuiTextfield = [
    TuiLabel,
    TuiSelectDirective,
    TuiTextfieldComponent,
    TuiTextfieldDirective,
    TuiTextfieldOptionsDirective,
] as const;
