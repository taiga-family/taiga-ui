import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-slider-example-3`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiSliderExample3 {
    readonly labels: number[] = [0, 250, 500, 750, 1000];
    readonly formControl = new FormControl(250);

    patchValue(newValue: number): void {
        this.formControl.patchValue(newValue);
    }
}
