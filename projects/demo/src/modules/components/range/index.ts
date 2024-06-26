import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeS} from '@taiga-ui/core';
import type {TuiKeySteps} from '@taiga-ui/kit';
import {TuiRange} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiRange, ReactiveFormsModule],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly control = new FormControl([0, 0]);

    protected readonly sizeVariants: readonly TuiSizeS[] = ['s', 'm'];

    protected size: TuiSizeS = this.sizeVariants[1];

    protected min = 0;

    protected max = 100;

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
