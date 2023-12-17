import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-slider-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiSliderExample3 {
    readonly labels: number[] = [0, 250, 500, 750, 1000];
    readonly formControl = new UntypedFormControl(250);

    patchValue(newValue: number): void {
        this.formControl.patchValue(newValue);
    }
}
