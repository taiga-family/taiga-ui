import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatar, TuiAvatarOutline} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAvatar, TuiAvatarOutline],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
