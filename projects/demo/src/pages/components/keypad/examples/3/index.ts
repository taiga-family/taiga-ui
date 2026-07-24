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
    // Reshuffled on every clear — like PIN terminals that reorder the pad. Seeded (not
    // Math.random) so the rendered order is reproducible and demo snapshots stay stable.
    private seed = 1;

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
        this.seed += 1;
        this.digits.set(this.shuffle());
    }

    private shuffle(): string[] {
        // LCG-derived key per digit, then sort by it — a deterministic Fisher-Yates stand-in
        let state = this.seed;

        const next = (): number => {
            state = (state * 1103515245 + 12345) % 2147483648;

            return state;
        };

        return DIGITS.map((digit) => [next(), digit] as const)
            .sort(([a], [b]) => a - b)
            .map(([, digit]) => digit);
    }
}
