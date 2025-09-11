import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiFade, TuiProgress} from '@taiga-ui/kit';
import {TuiAppBar} from '@taiga-ui/layout';

@Component({
    imports: [TuiAppBar, TuiButton, TuiFade, TuiPlatform, TuiProgress, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
