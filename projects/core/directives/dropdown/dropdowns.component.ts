import {ChangeDetectionStrategy, Component} from '@angular/core';
import {tuiAsPortal, TuiPortals} from '@taiga-ui/cdk/classes';

import {TuiDropdownService} from './dropdown.service';

/**
 * Host element for dynamically created portals, for example using {@link TuiDropdownDirective}.
 */
@Component({
    standalone: true,
    selector: 'tui-dropdowns',
    host: {style: 'position: absolute; width: 100%;'},
    template: '<ng-container #viewContainer />',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsPortal(TuiDropdownService)],
})
export class TuiDropdowns extends TuiPortals {}
