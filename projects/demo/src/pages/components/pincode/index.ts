import {Component, effect, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiPincode, type TuiPincodeAppearance, type TuiPincodeMode} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiDemo, TuiPincode],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly examples = [
        'Basic',
        'Dots',
        'Fast loading',
        'Long loading',
        'Desktop',
        'Mobile',
    ];

    protected readonly lengths = [4, 5, 6] as const;
    protected length = this.lengths[0];

    protected readonly modeVariants: readonly TuiPincodeMode[] = [
        'dismissing',
        'invalid',
        'pending',
        'submitting',
        'success',
    ];

    protected readonly appearanceVariants: readonly TuiPincodeAppearance[] = [
        'numbers',
        'dots',
    ];

    protected readonly mode = signal<TuiPincodeMode | null>(null);
    protected readonly appearance = signal<TuiPincodeAppearance>('numbers');
    protected readonly control = new FormControl('');

    constructor() {
        effect(() => {
            const mode = this.mode();

            if (mode === 'dismissing') {
                setTimeout(() => this.mode.set(null), 800);
            } else if (mode === 'submitting') {
                setTimeout(() => this.mode.set(null), 1900);
            }
        });
    }
}
