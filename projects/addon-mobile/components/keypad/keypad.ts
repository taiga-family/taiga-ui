import {TuiKeypadComponent, TuiKeypadKeyDirective} from './keypad.component';
import {TuiKeypadHostDirective} from './keypad-host.directive';
import {TuiKeypadInputDirective} from './keypad-input.directive';

export const TuiKeypad = [
    TuiKeypadComponent,
    TuiKeypadKeyDirective,
    TuiKeypadInputDirective,
    TuiKeypadHostDirective,
] as const;
