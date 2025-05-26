import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiTextarea} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiTextarea, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
}
