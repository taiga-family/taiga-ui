import {TuiKeypadComponent} from './keypad.component';
import {TuiKeypadInputDirective} from './keypad-input.directive';
import {TuiKeypadKeyDirective} from './keypad-key.directive';

export const TuiKeypad = [
    TuiKeypadComponent,
    TuiKeypadKeyDirective,
    TuiKeypadInputDirective,
] as const;
