import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core/components/textfield';
import {TuiDropdownContent} from '@taiga-ui/core/portals';

import {TuiInputNumberDirective} from './input-number.directive';
import {TuiQuantumValueTransformer} from './quantum.directive';
import {TuiInputNumberStep} from './step/input-number-step.component';

export const TuiInputNumber = [
    TuiInputNumberDirective,
    TuiInputNumberStep,
    TuiQuantumValueTransformer,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
    TuiDropdownContent,
] as const;
