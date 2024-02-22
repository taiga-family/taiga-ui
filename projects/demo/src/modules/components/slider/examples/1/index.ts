import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-slider-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiSliderExample1 {
    protected value = 4;
    protected formControl = new FormControl(60);
}
