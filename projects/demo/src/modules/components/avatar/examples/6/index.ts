import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-avatar-example-6',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiAvatarExample6 {
    readonly waterplea = 'https://avatars.githubusercontent.com/u/11832552?v=4';
    readonly wrongUrl = 'https://taiga-ui.dev/assets/images/test-not-found.png';
}
