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

    protected readonly lengths = [4, 5, 6] as const;
    protected length = this.lengths[0];
    protected readonly validVariants = [true, false] as const;
    protected readonly typeVariants = ['text', 'password'] as const;
    protected readonly valid = signal<boolean | null>(null);
    protected readonly type = signal<'password' | 'text'>('text');
    protected readonly control = new FormControl('');
}
