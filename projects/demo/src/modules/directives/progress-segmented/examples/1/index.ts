import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiProgress} from '@taiga-ui/kit';

@Component({
    imports: [TuiProgress],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
