import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-slider-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiInputSliderExample2 {
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
