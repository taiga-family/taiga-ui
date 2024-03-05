import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiAsPortal, TuiPortalsComponent} from '@taiga-ui/cdk';

import {CustomPortalService} from './custom-portal.service';

@Component({
    standalone: true,
    selector: 'custom-host',
    templateUrl: './custom-host.template.html',
    styleUrls: ['./custom-host.style.less'],
    changeDetection,
    providers: [tuiAsPortal(CustomPortalService)],
})
export class CustomHostComponent extends TuiPortalsComponent {}
