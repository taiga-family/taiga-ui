import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton, TuiIcon, TuiLoader, TuiTitle} from '@taiga-ui/core';
import {TuiToast} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButton, TuiIcon, TuiLoader, TuiPlatform, TuiTitle, TuiToast],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
