import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiOption} from '@taiga-ui/core';
import {TuiTagModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiTagModule, TuiOption],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
