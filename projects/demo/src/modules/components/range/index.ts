import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {type TuiSizeS} from '@taiga-ui/core';
import {type TuiKeySteps, TuiRange} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiDemo, TuiRange],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly examples = ['Sizes', 'Segments', 'KeySteps'];
    protected readonly control = new FormControl([0, 0]);

    protected readonly sizeVariants: readonly TuiSizeS[] = ['s', 'm'];
    protected readonly limitVariants: readonly number[] = [Infinity, 100, 50, 10, 5, 1];

    protected size: TuiSizeS = this.sizeVariants[1]!;

    protected min = 0;

    protected max = 100;

    protected margin = 0;

    protected limit = Infinity;

    protected step = 1;

    protected segments = 1;

    protected readonly keyStepsVariants: readonly TuiKeySteps[] = [
        [
            [0, 0],
            [50, 1_000],
            [100, 10_000],
        ],
    ];

    protected keySteps: TuiKeySteps | null = null;

    protected get disabled(): boolean {
        return this.control.disabled;
    }

    protected set disabled(value: boolean) {
        if (value) {
            this.control.disable();

            return;
        }

        this.control.enable();
    }
}
