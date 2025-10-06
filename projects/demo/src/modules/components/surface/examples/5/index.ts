import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRipple} from '@taiga-ui/addon-mobile';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiSurface} from '@taiga-ui/layout';

@Component({
    imports: [FormsModule, TuiRepeatTimes, TuiSurface, TuiRipple],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = null;
}
