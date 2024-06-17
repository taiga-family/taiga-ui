import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatformDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiLinkDirective, TuiSurfaceDirective} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeaderDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiCardLarge,
        TuiSurfaceDirective,
        TuiButtonDirective,
        TuiLinkDirective,
        TuiPlatformDirective,
        TuiHeaderDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
