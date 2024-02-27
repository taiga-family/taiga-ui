import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFormatDateService} from '@taiga-ui/core';

import {FormatService} from './service';

@Component({
    selector: 'tui-format-date-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TuiFormatDateService,
            useClass: FormatService,
        },
    ],
})
export class TuiFormatDateExample1 {
    protected readonly now = Date.now();
}
