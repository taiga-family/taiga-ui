import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiStepper} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButton, TuiStepper],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
