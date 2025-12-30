import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {TuiLabel} from '@taiga-ui/core/components/label';
import {TuiDropdownContent} from '@taiga-ui/core/portals/dropdown';

import {TuiTextfieldComponent} from './textfield.component';
import {TuiTextfieldOptionsDirective} from './textfield.options';
import {TuiTextfieldMultiComponent} from './textfield-multi/textfield-multi.component';

export const TuiTextfield = [
    TuiItem,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
    TuiTextfieldMultiComponent,
    TuiDropdownContent,
] as const;
