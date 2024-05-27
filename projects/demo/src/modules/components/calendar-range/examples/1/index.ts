import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCalendarRangeComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiCalendarRangeComponent],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
