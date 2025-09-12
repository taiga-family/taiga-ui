import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdown} from '@taiga-ui/core';

@Component({
    imports: [TuiDropdown],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
