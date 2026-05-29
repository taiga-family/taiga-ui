import {Component, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiPincode} from '@taiga-ui/kit';

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

    protected length = 4;
    protected readonly invalidVariants = [true, false] as const;
    protected readonly typeVariants = ['text', 'password'] as const;
    protected readonly invalid = signal<boolean | null>(null);
    protected readonly type = signal<'password' | 'text'>('text');
    protected readonly control = new FormControl('');

    protected onFinished(): void {
        setTimeout(() => {
            this.invalid.set(null);
            this.control.reset('');
        }, 1500);
    }
}
