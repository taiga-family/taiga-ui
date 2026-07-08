import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDropdown, TuiIcon, TuiInput} from '@taiga-ui/core';
import {TuiCopy} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiButton, TuiCopy, TuiDropdown, TuiIcon, TuiInput],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
    protected link = 'https://taiga-ui.dev';
}
