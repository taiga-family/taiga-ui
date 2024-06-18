import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiSurface} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiCardLarge, TuiSurface, TuiHeader, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
