import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton, TuiHeader, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    imports: [TuiButton, TuiCardLarge, TuiHeader, TuiPlatform, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
