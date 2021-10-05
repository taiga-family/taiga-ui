import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-format-phone-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiFormatPhoneExample1 {
    phone = '+78005557778';
}
