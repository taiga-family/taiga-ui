import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {tuiDateFormatProvider, TuiNotificationComponent} from '@taiga-ui/core';
import {TuiInputDateModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiNotificationComponent, TuiInputDateModule, ReactiveFormsModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiDateFormatProvider({mode: 'YMD', separator: '/'})],
})
export default class ExampleComponent {
    protected readonly control = new FormControl(new TuiDay(2017, 0, 15));
}
