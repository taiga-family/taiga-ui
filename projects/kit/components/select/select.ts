import {TuiTextfield} from '@taiga-ui/core/components/textfield';

import {TuiNativeSelect} from './native-select/native-select.component';
import {TuiSelectDirective} from './select.directive';

export const TuiSelect = [TuiSelectDirective, TuiNativeSelect, TuiTextfield] as const;
