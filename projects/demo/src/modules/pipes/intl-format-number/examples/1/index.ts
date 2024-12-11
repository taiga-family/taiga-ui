import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIntlFormatNumberPipe} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiIntlFormatNumberPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
