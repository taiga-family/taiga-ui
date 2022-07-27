import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DATE_TIME_VALUE_TRANSFORMER} from '@taiga-ui/kit';

import {ExampleDateTimeTransformer} from './value-transformer';

@Component({
    selector: `tui-input-date-time-example-4`,
    templateUrl: `./index.html`,
    providers: [
        {
            provide: TUI_DATE_TIME_VALUE_TRANSFORMER,
            useClass: ExampleDateTimeTransformer,
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiInputDateTimeExample4 {
    readonly control = new FormControl(`19.01.2022, 12:33`);
}
