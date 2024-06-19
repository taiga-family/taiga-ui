import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiComment} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiComment],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
