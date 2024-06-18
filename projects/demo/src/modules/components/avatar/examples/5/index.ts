import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatar, tuiAvatarOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAvatar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiAvatarOptionsProvider({size: 'l'})],
})
export default class Example {}
