import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: `tui-avatar-example-3`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
    providers: [
        tuiAvatarOptionsProvider({
            size: `l`,
            autoColor: true,
            rounded: true,
        }),
    ],
})
export class TuiAvatarExample3 {}
