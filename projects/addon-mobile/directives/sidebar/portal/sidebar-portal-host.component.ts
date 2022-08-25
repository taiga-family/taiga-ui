import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
    AbstractTuiPortalHostComponent,
    AbstractTuiPortalService,
    TuiPortalService,
} from '@taiga-ui/cdk';

@Component({
    selector: `tui-sidebar-portal-host`,
    template: `
        <ng-container #viewContainer></ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: AbstractTuiPortalService, useExisting: TuiPortalService}],
})
export class TuiSidebarPortalHostComponent extends AbstractTuiPortalHostComponent {}
