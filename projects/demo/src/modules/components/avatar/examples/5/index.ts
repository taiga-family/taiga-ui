import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatarComponent, tuiAvatarOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-avatar-example-5',
    imports: [TuiAvatarComponent],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiAvatarOptionsProvider({size: 'l'})],
})
export class TuiAvatarExample5 {}
