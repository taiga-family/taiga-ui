import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCalendar, TuiDropdown} from '@taiga-ui/core';
import {TuiButtonSelect} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiButton, TuiButtonSelect, TuiCalendar, TuiDropdown],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = null;
}
