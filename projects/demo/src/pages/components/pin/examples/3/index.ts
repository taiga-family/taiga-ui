import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiBadge, TuiPin} from '@taiga-ui/kit';

@Component({
    imports: [TuiIcon, TuiPin, TuiBadge],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected a = true;
    protected b = false;
    protected c = true;
    protected d = false;
}
