import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiInputSlider, TuiTooltip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiIcon, TuiInputSlider, TuiTextfield, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 42;
}
