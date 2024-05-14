import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {TuiDropdownModule, TuiLinkDirective} from '@taiga-ui/core';
import {TuiAvatarComponent, TuiSwitchComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiDropdownModule,
        TuiSwitchComponent,
        FormsModule,
        TuiLinkDirective,
        TuiAvatarComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected open = false;
    protected avatarUrl = assets`/images/avatar.jpg`;
}
