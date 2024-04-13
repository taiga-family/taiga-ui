import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDay} from '@taiga-ui/cdk';
import {tuiDateFormatProvider, TuiNotificationModule} from '@taiga-ui/core';
import {TuiInputDateModule} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiNotificationModule, TuiInputDateModule, ReactiveFormsModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiDateFormatProvider({mode: 'YMD', separator: '/'})],
})
export default class ExampleComponent {
    protected readonly control = new FormControl(new TuiDay(2017, 0, 15));
}
