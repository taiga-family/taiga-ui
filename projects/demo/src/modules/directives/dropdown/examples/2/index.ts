import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {TuiDropdown, TuiLink} from '@taiga-ui/core';
import {TuiAvatarComponent, TuiSwitch} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDropdown, TuiSwitch, FormsModule, TuiLink, TuiAvatarComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
    protected avatarUrl = assets`/images/avatar.jpg`;
}
