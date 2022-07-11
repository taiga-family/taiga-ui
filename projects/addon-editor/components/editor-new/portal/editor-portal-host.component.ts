import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
    AbstractTuiPortalHostComponent,
    AbstractTuiPortalService,
    TuiDropdownPortalService,
} from '@taiga-ui/cdk';

@Component({
    selector: `tui-editor-portal-host`,
    template: `
        <ng-container #viewContainer></ng-container>
    `,
    styleUrls: [`./editor-portal-host.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {provide: AbstractTuiPortalService, useExisting: TuiDropdownPortalService},
    ],
})
export class TuiEditorPortalHostComponent extends AbstractTuiPortalHostComponent {}
