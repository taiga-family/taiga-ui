import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiCalendarRange} from '@taiga-ui/kit';
import {of} from 'rxjs';

@Component({
    imports: [TuiCalendarRange, JsonPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = new TuiDayRange(new TuiDay(2019, 2, 11), new TuiDay(2019, 2, 14));
}
