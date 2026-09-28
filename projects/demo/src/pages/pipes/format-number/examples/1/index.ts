import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFormatNumberPipe} from '@taiga-ui/kit';

@Component({
    imports: [TuiFormatNumberPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
