import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-slider-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiSliderExample2 {
    readonly testValue = new FormControl();

    keySteps = [
        [(100 / 3) * 1, 100000],
        [(100 / 3) * (1 + 1), 300000],
    ];
}
