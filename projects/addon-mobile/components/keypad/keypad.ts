import {TuiKeypadComponent} from './keypad.component';
import {TuiKeypadButton} from './keypad-button.component';
import {TuiKeypadInputDirective} from './keypad-input.directive';

export const TuiKeypad = [
    TuiKeypadComponent,
    TuiKeypadButton,
    TuiKeypadInputDirective,
] as const;
