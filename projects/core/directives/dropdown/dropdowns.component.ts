import {ChangeDetectionStrategy, Component} from '@angular/core';
import {tuiAsPortal, TuiPortalsComponent} from '@taiga-ui/cdk';

import {TuiDropdownService} from './dropdown.service';

/**
 * Host element for dynamically created portals, for example using {@link TuiDropdownDirective}.
 */
@Component({
    standalone: true,
    selector: 'tui-dropdowns',
    template: `
        <ng-content></ng-content>
        <ng-container #viewContainer></ng-container>
    `,
    styles: [
        `
            :host {
                display: block;
                height: 100%;
                isolation: isolate;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsPortal(TuiDropdownService)],
})
export class TuiDropdownsComponent extends TuiPortalsComponent {}
