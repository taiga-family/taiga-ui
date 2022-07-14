import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiClamp} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-slider-example-6',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiSliderExample6 {
    min = 0.5;
    max = 2;
    value = 1;

    change(step: number): void {
        this.value = tuiClamp(this.value + step, this.min, this.max);
    }
}
