import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiPulse} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButton, TuiPulse],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected playing = true;
}
