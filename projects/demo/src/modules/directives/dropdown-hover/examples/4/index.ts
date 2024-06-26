import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDropdown, TuiGroup} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDropdown, TuiGroup, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
