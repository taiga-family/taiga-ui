import {Injectable} from '@angular/core';
import {AbstractTuiPortalService} from '@taiga-ui/cdk/abstract/portal-service';

@Injectable({
    providedIn: `root`,
})
export class CustomPortalService extends AbstractTuiPortalService {}
