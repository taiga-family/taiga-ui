import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiPassword} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiIcon, TuiPassword, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
}
