import {Component, model} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiCalendar, TuiInput} from '@taiga-ui/core';
import {TuiInputDate, tuiInputDateOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiCalendar, TuiInput, TuiInputDate],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiInputDateOptionsProvider({icon: ''})],
})
export default class Example {
    protected readonly value = model(TuiDay.currentLocal());
}
