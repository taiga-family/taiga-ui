import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
    AbstractTuiPortalHostComponent,
    AbstractTuiPortalService,
    TuiPortalService,
} from '@taiga-ui/cdk';

@Component({
    selector: `tui-editor-portal-host`,
    template: `
        <ng-container #viewContainer></ng-container>
    `,
    styleUrls: [`./editor-portal-host.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: AbstractTuiPortalService, useExisting: TuiPortalService}],
})
export class TuiEditorPortalHostComponent extends AbstractTuiPortalHostComponent {}
