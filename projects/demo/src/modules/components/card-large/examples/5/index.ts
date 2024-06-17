import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiSurfaceDirective} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCellDirective, TuiHeaderDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiCardLarge,
        TuiSurfaceDirective,
        TuiHeaderDirective,
        TuiRepeatTimes,
        TuiAvatarComponent,
        TuiButtonDirective,
        TuiCellDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
