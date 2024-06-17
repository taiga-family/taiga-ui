import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiInputSliderModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiInputSliderModule, ReactiveFormsModule, TuiButtonDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl(40);
    protected readonly segments = 5;
    protected readonly max = 100;
    protected readonly min = 0;

    protected increase(): void {
        this.control.patchValue(
            Math.min(((this.control?.value as number) ?? 0) + 20, this.max),
        );
    }

    protected decrease(): void {
        this.control.patchValue(
            Math.max(((this.control?.value as number) ?? 0) - 20, this.min),
        );
    }
}
