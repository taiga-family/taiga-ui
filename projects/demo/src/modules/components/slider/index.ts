import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeS} from '@taiga-ui/core';
import {TuiSlider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiDemo, TuiSlider],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
    protected readonly examples = [
        'Sizes',
        'Colors',
        'Segments',
        'Disabled',
        'KeySteps',
        'Complex',
    ];

    protected readonly sizeVariants: readonly TuiSizeS[] = ['s', 'm'];
    protected readonly segmentsVariants: Array<number[] | number> = [
        1,
        5,
        3,
        [0.2, 0.5],
        [0.1, 0.3],
    ];

    protected readonly control = new FormControl(1);

    protected max = 5;
    protected min = 0;
    protected step = 1;
    protected size: TuiSizeS = this.sizeVariants[1]!;
    protected segments: number[] | number = this.max;

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
