import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

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
