import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatformModule} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiLinkDirective, TuiSurfaceDirective} from '@taiga-ui/core';
import {TuiCardLargeDirective, TuiHeaderDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiCardLargeDirective,
        TuiSurfaceDirective,
        TuiButtonDirective,
        TuiLinkDirective,
        TuiPlatformModule,
        TuiHeaderDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
