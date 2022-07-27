import {ChangeDetectionStrategy, Component} from '@angular/core';

import {TuiGroupDirective} from './group.directive';

/** @deprecated */
@Component({
    selector: `tui-group`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <ng-content></ng-content>
    `,
    host: {
        class: `tui-group`,
        role: `group`,
    },
})
export class TuiGroupComponent extends TuiGroupDirective {}
