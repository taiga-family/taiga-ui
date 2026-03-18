import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiInputDate, tuiInputDateOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputDate],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiInputDateOptionsProvider({keepFocus: true})],
})
export default class Example {
    protected value = new TuiDay(2017, 0, 15);
}
