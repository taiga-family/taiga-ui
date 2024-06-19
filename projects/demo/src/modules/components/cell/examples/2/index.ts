import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {
    TuiAvatarComponent,
    TuiBadgedContentComponent,
    TuiBadgeDirective,
    TuiSwitch,
} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiCell,
        TuiBadgedContentComponent,
        TuiBadgeDirective,
        TuiIcon,
        TuiAvatarComponent,
        TuiSwitch,
        FormsModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected incoming = false;
    protected outgoing = true;
}
