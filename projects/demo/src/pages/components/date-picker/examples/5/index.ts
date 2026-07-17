import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiCalendars} from '@taiga-ui/experimental';

@Component({
    imports: [TuiCalendars],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly min = TuiDay.currentLocal().append({month: -2, year: -10});
    protected readonly max = TuiDay.currentLocal().append({month: 2, year: 10});
    protected readonly disabledItemHandler = (item: TuiDay): boolean => item.day === 13;
    protected value = TuiDay.currentLocal();
}
