import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiKeypad} from '@taiga-ui/addon-mobile';
import {TuiIcon} from '@taiga-ui/core';

@Component({
    imports: [TuiDemo, TuiIcon, TuiKeypad],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected readonly examples = [
        'Basic keypad',
        'Custom keys',
        'Shuffled PIN',
        'Collapsible',
        'Fluid',
        'Calculator',
        'Phone Dialer',
    ];

    protected readonly digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    protected columns = 3;
    protected readonly columnsVariants = [3, 4];
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
