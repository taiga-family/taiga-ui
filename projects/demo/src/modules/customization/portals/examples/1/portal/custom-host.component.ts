import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {AbstractTuiPortalHostComponent} from '@taiga-ui/cdk/abstract/portal-host';
import {AbstractTuiPortalService} from '@taiga-ui/cdk/abstract/portal-service';

import {CustomPortalService} from './custom-portal.service';

@Component({
    selector: `custom-host`,
    templateUrl: `./custom-host.template.html`,
    styleUrls: [`./custom-host.style.less`],
    changeDetection,
    providers: [{provide: AbstractTuiPortalService, useExisting: CustomPortalService}],
})
export class CustomHostComponent extends AbstractTuiPortalHostComponent {}
