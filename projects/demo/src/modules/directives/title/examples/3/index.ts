import {Component} from '@angular/core';
import {TuiLinkDirective, TuiTitleDirective} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [TuiAvatarComponent, TuiTitleDirective, TuiLinkDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
