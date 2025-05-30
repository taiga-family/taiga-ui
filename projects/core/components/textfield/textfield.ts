import {TuiLabel} from '@taiga-ui/core/components/label';

import {TuiSelect} from './select.directive';
import {TuiTextfieldComponent} from './textfield.component';
import {TuiTextfieldDirective} from './textfield.directive';
import {TuiTextfieldOptionsDirective} from './textfield.options';
import {TuiTextfieldDropdownDirective} from './textfield-dropdown.directive';
import {TuiTextfieldMultiComponent} from './textfield-multi/textfield-multi.component';

export const TuiTextfield = [
    TuiLabel,
    TuiSelect,
    TuiTextfieldComponent,
    TuiTextfieldDirective,
    TuiTextfieldOptionsDirective,
    TuiTextfieldDropdownDirective,
    TuiTextfieldMultiComponent,
] as const;
