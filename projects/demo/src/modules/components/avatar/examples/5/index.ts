import {Component} from '@angular/core';
import {TuiAvatarComponent, tuiAvatarOptionsProvider} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiAvatarComponent],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiAvatarOptionsProvider({size: 'l'})],
})
export default class ExampleComponent {}
