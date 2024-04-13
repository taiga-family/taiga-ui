import {Component} from '@angular/core';
import {TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkDirective} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';

@Component({
    standalone: true,
    imports: [TuiDocPageModule, TuiLinkDirective],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {}
