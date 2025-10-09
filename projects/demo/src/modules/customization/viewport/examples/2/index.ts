import {ChangeDetectionStrategy, Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAsPortal, tuiInjectElement, TuiPortals} from '@taiga-ui/cdk';
import {
    tuiAsViewport,
    TuiDropdown,
    TuiPopupService,
    type TuiRectAccessor,
} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'portal-host',
    template: `
        <ng-content />
        <ng-container #vcr />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsPortal(TuiPopupService), tuiAsViewport(PortalHost)],
})
class PortalHost extends TuiPortals implements TuiRectAccessor {
    private readonly el = tuiInjectElement();

    public readonly type = 'viewport';

    public getClientRect(): DOMRect {
        return this.el.getBoundingClientRect();
    }
}

@Component({
    imports: [PortalHost, TuiDropdown],
    templateUrl: './index.html',
    styleUrls: ['../1/index.less'],
    encapsulation,
    changeDetection,
    providers: [TuiPopupService],
})
export default class Example {}
