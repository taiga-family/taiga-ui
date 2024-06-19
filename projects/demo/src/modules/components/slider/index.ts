import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeS} from '@taiga-ui/core';
import {TuiLink, TuiNotification} from '@taiga-ui/core';
import {TuiSliderComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiLink, TuiNotification, TuiSliderComponent, ReactiveFormsModule],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
    protected readonly sizeVariants: readonly TuiSizeS[] = ['s', 'm'];
    protected readonly control = new FormControl(1);

    protected max = 5;
    protected min = 0;
    protected step = 1;
    protected size: TuiSizeS = this.sizeVariants[1];
    protected segments = this.max;

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
