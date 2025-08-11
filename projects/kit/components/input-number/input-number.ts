import {TuiInputNumberDirective} from './input-number.directive';
import {TuiQuantumValueTransformer} from './quantum.directive';
import {TuiInputNumberStep} from './step/input-number-step.component';

export const TuiInputNumber = [
    TuiInputNumberDirective,
    TuiInputNumberStep,
    TuiQuantumValueTransformer,
] as const;
