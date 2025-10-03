import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimesPipe} from '@taiga-ui/cdk';

@Component({
    imports: [TuiRepeatTimesPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
