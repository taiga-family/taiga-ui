import"./chunk-HU6DUUP4.js";var o=`import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInjectElement} from '@taiga-ui/cdk';
import {
    tuiAsViewport,
    TuiButton,
    TuiHint,
    type TuiHintDirection,
    TuiLink,
    type TuiRectAccessor,
} from '@taiga-ui/core';
import {TuiSegmented} from '@taiga-ui/kit';

@Component({
    selector: 'portal-host',
    template: '<ng-content />',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsViewport(PortalHost)],
})
class PortalHost implements TuiRectAccessor {
    private readonly el = tuiInjectElement();

    public readonly type = 'viewport';

    public getClientRect(): DOMRect {
        return this.el.getBoundingClientRect();
    }
}

@Component({
    imports: [FormsModule, PortalHost, TuiButton, TuiHint, TuiLink, TuiSegmented],
    templateUrl: './index.html',
    styleUrl: '../1/index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected hintShown = false;

    protected directions: TuiHintDirection[] = ['top', 'start', 'end', 'bottom'];

    protected selected = this.directions[0]!;

    protected toggleHint(): void {
        this.hintShown = !this.hintShown;
    }
}
`;export{o as default};
