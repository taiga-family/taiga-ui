import {TuiLabel} from '@taiga-ui/core/components/label';

import {TuiSelect} from './select.directive';
import {TuiTextfieldComponent} from './textfield.component';
import {TuiTextfieldDirective} from './textfield.directive';
import {TuiTextfieldOptionsDirective} from './textfield.options';

export const TuiTextfield = [
    TuiLabel,
    TuiSelect,
    TuiTextfieldComponent,
    TuiTextfieldDirective,
    TuiTextfieldOptionsDirective,
] as const;
