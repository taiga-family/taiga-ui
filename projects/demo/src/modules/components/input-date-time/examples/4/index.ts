import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DATE_TIME_VALUE_TRANSFORMER} from '@taiga-ui/kit';

import {ExampleDateTimeTransformer} from './value-transformer';

@Component({
    selector: 'tui-input-date-time-example-4',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_DATE_TIME_VALUE_TRANSFORMER,
            useClass: ExampleDateTimeTransformer,
        },
    ],
})
export class TuiInputDateTimeExample4 {
    readonly control = new UntypedFormControl('19.01.2022, 12:33');
}
