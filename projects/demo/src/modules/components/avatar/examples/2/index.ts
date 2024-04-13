import {Component} from '@angular/core';
import {TuiAutoColorPipe} from '@taiga-ui/core';
import {TuiAvatarComponent, TuiFadeDirective} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiAvatarComponent, TuiAutoColorPipe, TuiFadeDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
