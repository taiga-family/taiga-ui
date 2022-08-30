import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {AbstractTuiPortalHostComponent, AbstractTuiPortalService} from '@taiga-ui/cdk';

import {CustomPortalService} from './custom-portal.service';

@Component({
    selector: `custom-host`,
    templateUrl: `./custom-host.template.html`,
    styleUrls: [`./custom-host.style.less`],
    changeDetection,
    providers: [
        {provide: AbstractTuiPortalService, useExisting: CustomPortalService},
        {provide: AbstractTuiPortalHostComponent, useExisting: CustomHostComponent},
    ],
})
export class CustomHostComponent extends AbstractTuiPortalHostComponent {}
