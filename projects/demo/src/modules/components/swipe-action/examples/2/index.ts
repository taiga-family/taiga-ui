import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSwipeActions} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiSurfaceDirective, TuiTitleDirective} from '@taiga-ui/core';
import {TuiAvatarComponent, TuiSwitchComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiSwipeActions,
        TuiSurfaceDirective,
        TuiAvatarComponent,
        TuiTitleDirective,
        TuiButton,
        TuiSwitchComponent,
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
