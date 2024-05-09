import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatformDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiSurfaceDirective} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import {TuiCardLargeDirective, TuiHeaderDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAvatarComponent,
        TuiCardLargeDirective,
        TuiSurfaceDirective,
        TuiPlatformDirective,
        TuiButtonDirective,
        TuiHeaderDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
