import {Component, computed, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiKeypad} from '@taiga-ui/addon-mobile';
import {TuiIcon} from '@taiga-ui/core';

const PIN_LENGTH = 4;
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

@Component({
    imports: [TuiIcon, TuiKeypad],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    // Positions are randomized on every clear — like PIN terminals that reshuffle the pad
    protected readonly digits = signal(this.shuffle());
    protected readonly pin = signal('');
    protected readonly masked = computed(() => '•'.repeat(this.pin().length));

    protected append(digit: string): void {
        if (this.pin().length < PIN_LENGTH) {
            this.pin.update((current) => `${current}${digit}`);
        }
    }

    protected backspace(): void {
        this.pin.update((current) => current.slice(0, -1));
    }

    protected clear(): void {
        this.pin.set('');
        this.digits.set(this.shuffle());
    }

    private shuffle(): string[] {
        return [...DIGITS].sort(() => Math.random() - 0.5);
    }
}
