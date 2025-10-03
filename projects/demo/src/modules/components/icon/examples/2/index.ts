import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiNumberFormat, TuiTextfield} from '@taiga-ui/core';
import {TuiInputSlider} from '@taiga-ui/kit';

@Component({
    imports: [TuiIcon, TuiTextfield, TuiInputSlider, FormsModule, TuiNumberFormat],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected container = 24;
    protected icon = 24;
    protected thickness = 2;
}
