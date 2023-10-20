import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
    AbstractTuiPortalHostComponent,
    AbstractTuiPortalService,
    TuiDropdownPortalService,
} from '@taiga-ui/cdk';
import {tuiAsViewport, TuiRectAccessor} from '@taiga-ui/core';

@Component({
    selector: `portal-host`,
    template: `
        <ng-content></ng-content>
        <ng-container #viewContainer></ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDropdownPortalService,
        {
            provide: AbstractTuiPortalService,
            useExisting: TuiDropdownPortalService,
        },
        tuiAsViewport(PortalHost),
    ],
})
export class PortalHost
    extends AbstractTuiPortalHostComponent
    implements TuiRectAccessor
{
    readonly type = `viewport`;

    getClientRect(): ClientRect {
        return this.el.nativeElement.getBoundingClientRect();
    }
}
