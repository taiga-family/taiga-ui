import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-slider-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiSliderExample1 {
    value = 4;
    formControl = new UntypedFormControl(60);
}
