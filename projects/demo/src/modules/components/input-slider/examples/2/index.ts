import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
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
    readonly control = new UntypedFormControl(40);
    readonly segments = 5;
    readonly max = 100;
    readonly min = 0;

    increase(): void {
        this.control.patchValue(
            Math.min(((this.control?.value as number) ?? 0) + 20, this.max),
        );
    }

    decrease(): void {
        this.control.patchValue(
            Math.max(((this.control?.value as number) ?? 0) - 20, this.min),
        );
    }
}
