import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimesDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiSurfaceDirective} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import {
    TuiCardLargeDirective,
    TuiCellDirective,
    TuiHeaderDirective,
} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiCardLargeDirective,
        TuiSurfaceDirective,
        TuiHeaderDirective,
        TuiRepeatTimesDirective,
        TuiAvatarComponent,
        TuiButtonDirective,
        TuiCellDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
