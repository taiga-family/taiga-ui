import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatar, TuiAvatarLabeled} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiAvatarLabeled],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
