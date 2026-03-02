import"./chunk-HU6DUUP4.js";var o=`import {ChangeDetectionStrategy, Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInjectElement, TuiPortals, TuiPortalService, tuiProvide} from '@taiga-ui/cdk';
import {
    tuiAsViewport,
    TuiDropdown,
    TuiPopupService,
    type TuiRectAccessor,
} from '@taiga-ui/core';

@Component({
    selector: 'portal-host',
    template: \`
        <ng-content />
        <ng-container #vcr />
    \`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(TuiPortalService, TuiPopupService), tuiAsViewport(PortalHost)],
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
    styleUrl: '../1/index.less',
    encapsulation,
    changeDetection,
    providers: [TuiPopupService],
})
export default class Example {}
`;export{o as default};
