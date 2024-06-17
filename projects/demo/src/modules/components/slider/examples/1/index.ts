import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSliderComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiSliderComponent, FormsModule, ReactiveFormsModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 4;
    protected formControl = new FormControl(60);
}
