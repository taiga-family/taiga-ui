import {Component, effect, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiPincode, type TuiPincodeMode} from '@taiga-ui/kit';

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

    protected readonly typeVariants = ['text', 'password'] as const;
    protected readonly mode = signal<TuiPincodeMode | null>(null);
    protected readonly type = signal<'password' | 'text'>('text');
    protected readonly control = new FormControl('');

    constructor() {
        effect((onCleanup) => {
            const mode = this.mode();
            const delay = mode === 'dismissing' ? 800 : mode === 'submitting' ? 1900 : 0;

            if (!delay) {
                return;
            }

            const id = setTimeout(() => this.mode.set(null), delay);

            onCleanup(() => clearTimeout(id));
        });
    }
}
