import {Directive} from '@angular/core';
import {TuiPortalService} from '@taiga-ui/cdk';

import {TuiSidebarPortalService} from './sidebar-portal.service';

@Directive({
    selector: `[tuiSidebarPortal]`,
    providers: [
        TuiSidebarPortalService,
        {provide: TuiPortalService, useExisting: TuiSidebarPortalService},
    ],
})
export class TuiSidebarPortalDirective {
    constructor(readonly portalService: TuiSidebarPortalService) {}
}
