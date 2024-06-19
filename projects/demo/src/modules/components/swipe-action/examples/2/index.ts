import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSwipeActions} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatarComponent, TuiSwitch} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiSwipeActions,
        TuiSurface,
        TuiAvatarComponent,
        TuiTitle,
        TuiButton,
        TuiSwitch,
        FormsModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected checkbox = false;
}
