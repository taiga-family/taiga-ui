import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-format-phone-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiFormatPhoneExample1 {
    protected phone = '+78005557778';
}
