import {Injectable} from '@angular/core';
import {AbstractTuiPortalService} from '@taiga-ui/cdk/abstract';

/**
 * @deprecated create your own portal (see {@link https://taiga-ui.dev/portals Portals})
 * TODO: 3.0 replace with {@link TuiDropdownPortalService}
 */
@Injectable({
    providedIn: 'root',
})
export class TuiPortalService extends AbstractTuiPortalService {}
