import {NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiInjectElement, TuiPortals} from '@taiga-ui/cdk';
import type {TuiHintDirection, TuiRectAccessor} from '@taiga-ui/core';
import {tuiAsViewport, TuiButton, TuiHint, TuiLink} from '@taiga-ui/core';
import {TuiSegmented} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'portal-host',
    template: `
        <ng-content></ng-content>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsViewport(PortalHost)],
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
    imports: [
        FormsModule,
        NgForOf,
        PortalHost,
        TuiButton,
        TuiHint,
        TuiLink,
        TuiSegmented,
    ],
    templateUrl: './index.html',
    styleUrls: ['../1/index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected hintShown = false;

    protected directions: TuiHintDirection[] = ['top', 'left', 'right', 'bottom'];

    protected selected = this.directions[0]!;

    protected toggleHint(): void {
        this.hintShown = !this.hintShown;
    }
}
