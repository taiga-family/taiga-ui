import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPluralize} from '@taiga-ui/core';
import {TuiKeySteps} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-slider-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiInputSliderExample1 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(100000),
    });

    // 30 steps of 5000, 16 steps of 50 000, 58 steps of 500 000 = 104 steps
    readonly keySteps: TuiKeySteps = [
        [(100 / 104) * 30, 200000],
        [(100 / 104) * (30 + 16), 1000000],
    ];

    readonly pluralize: TuiPluralize = ['₽', '₽', '₽'];
}
