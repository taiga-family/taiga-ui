import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextareaModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, TuiTextareaModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
}
