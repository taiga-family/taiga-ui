import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiSlider} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiSlider],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Example {
    protected value = 80;
}
