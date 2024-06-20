import {ChangeDetectionStrategy, Component} from '@angular/core';
import {tuiAsPortal, tuiInjectElement, TuiPortals} from '@taiga-ui/cdk';
import type {TuiRectAccessor} from '@taiga-ui/core';
import {tuiAsViewport, TuiDropdownService} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'portal-host',
    template: `
        <ng-content></ng-content>
        <ng-container #viewContainer></ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDropdownService,
        tuiAsPortal(TuiDropdownService),
        tuiAsViewport(PortalHost),
    ],
})
export class PortalHost extends TuiPortals implements TuiRectAccessor {
    private readonly el = tuiInjectElement();

    public readonly type = 'viewport';

    public getClientRect(): DOMRect {
        return this.el.getBoundingClientRect();
    }
}
