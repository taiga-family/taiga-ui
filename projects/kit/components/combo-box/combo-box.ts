import {TuiTextfield} from '@taiga-ui/core/components/textfield';

import {TuiComboBoxDirective} from './combo-box.directive';

export const TuiComboBox = [TuiComboBoxDirective, TuiTextfield] as const;
