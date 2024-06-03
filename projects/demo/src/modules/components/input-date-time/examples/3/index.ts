import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {tuiDateFormatProvider} from '@taiga-ui/core';
import {TuiInputDateTimeModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiInputDateTimeModule, ReactiveFormsModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiDateFormatProvider({mode: 'YMD', separator: '/'})],
})
export default class ExampleComponent {
    protected readonly control = new FormControl([
        new TuiDay(2017, 2, 15),
        new TuiTime(12, 30),
    ]);
}
