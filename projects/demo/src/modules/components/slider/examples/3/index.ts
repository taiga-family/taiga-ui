import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
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
    protected readonly labels: number[] = [0, 250, 500, 750, 1000];
    protected readonly formControl = new FormControl(250);

    protected patchValue(newValue: number): void {
        this.formControl.patchValue(newValue);
    }
}
