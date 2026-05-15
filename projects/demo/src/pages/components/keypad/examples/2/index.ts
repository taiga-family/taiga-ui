import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiKeypad} from '@taiga-ui/addon-mobile';
import {TuiIcon} from '@taiga-ui/core';

const CUSTOM_PAD = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    [null, '0', 'backspace'],
] as const;

@Component({
    imports: [TuiIcon, TuiKeypad],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = signal('');
    protected readonly keys = CUSTOM_PAD;
}
