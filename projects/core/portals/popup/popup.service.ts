import {Injectable} from '@angular/core';
import {TuiPortalService} from '@taiga-ui/cdk/portals';

@Injectable({
    providedIn: 'root',
})
export class TuiPopupService extends TuiPortalService {}
