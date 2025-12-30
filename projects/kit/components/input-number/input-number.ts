import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core/components/textfield';
import {TuiDropdownContent} from '@taiga-ui/core/portals/dropdown';

import {TuiInputNumberDirective} from './input-number.directive';
import {TuiNumberMask} from './number-mask.directive';
import {
    TuiBigIntQuantumValueTransformer,
    TuiQuantumValueTransformer,
} from './quantum.directive';
import {TuiInputNumberStep} from './step/input-number-step.component';
import {TuiBigIntValueTransformer} from './transformers/bigint.value-transformer';

export const TuiInputNumber = [
    TuiInputNumberDirective,
    TuiNumberMask,
    TuiInputNumberStep,
    TuiBigIntValueTransformer,
    TuiQuantumValueTransformer,
    TuiBigIntQuantumValueTransformer,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
    TuiDropdownContent,
] as const;
