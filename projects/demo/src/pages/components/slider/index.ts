import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDemo} from '@demo/utils';
import {TuiSlider, TuiTitle} from '@taiga-ui/core';

@Component({
    imports: [ReactiveFormsModule, TuiDemo, TuiSlider, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
    protected readonly examples = [
        'Size',
        'Colors',
        'Segments',
        'Disabled',
        'KeySteps',
        'Complex',
        'Vertical',
    ];

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
    protected segments: number[] | number = this.max;
    protected thumbSize = 12;

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
