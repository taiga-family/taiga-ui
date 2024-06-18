import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiSurface} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCellDirective, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiCardLarge,
        TuiSurface,
        TuiHeader,
        TuiRepeatTimes,
        TuiAvatarComponent,
        TuiButton,
        TuiCellDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
