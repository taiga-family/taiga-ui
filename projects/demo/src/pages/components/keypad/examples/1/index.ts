import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiKeypad} from '@taiga-ui/addon-mobile';
import {TuiIcon} from '@taiga-ui/core';

@Component({
    imports: [TuiIcon, TuiKeypad],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    protected readonly value = signal('');

    protected append(digit: string): void {
        this.value.update((current) => `${current}${digit}`);
    }

    protected backspace(): void {
        this.value.update((current) => current.slice(0, -1));
    }

    protected clear(): void {
        this.value.set('');
    }
}
