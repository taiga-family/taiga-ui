import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiAppearance, TuiButton, TuiCardLarge, TuiHeader, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
