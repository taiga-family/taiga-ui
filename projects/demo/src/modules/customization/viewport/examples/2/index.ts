import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdown} from '@taiga-ui/core';

import {PortalHost} from './portal-host';

@Component({
    standalone: true,
    selector: 'tui-viewport-example-2',
    imports: [PortalHost, TuiDropdown],
    templateUrl: './index.html',
    styleUrls: ['../1/index.less'],
    encapsulation,
    changeDetection,
})
export class Example {}
