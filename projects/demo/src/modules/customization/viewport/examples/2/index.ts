import {ChangeDetectionStrategy, Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAsPortal, tuiInjectElement, TuiPortals} from '@taiga-ui/cdk';
import type {TuiRectAccessor} from '@taiga-ui/core';
import {tuiAsViewport, TuiDropdown, TuiDropdownService} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'portal-host',
    template: `
        <ng-content />
        <ng-container #viewContainer />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsPortal(TuiDropdownService), tuiAsViewport(PortalHost)],
})
class PortalHost extends TuiPortals implements TuiRectAccessor {
    private readonly el = tuiInjectElement();

    public readonly type = 'viewport';

    public getClientRect(): DOMRect {
        return this.el.getBoundingClientRect();
    }
}

@Component({
    standalone: true,
    imports: [PortalHost, TuiDropdown],
    templateUrl: './index.html',
    styleUrls: ['../1/index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
