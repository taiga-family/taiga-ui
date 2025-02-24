import {TuiInputNumberDirective} from './input-number.directive';
import {TuiInputNumberStep} from './step/input-number-step.component';

export const TuiInputNumber = [TuiInputNumberDirective, TuiInputNumberStep] as const;
