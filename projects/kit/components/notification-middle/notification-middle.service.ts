import {Injectable} from '@angular/core';
import {TuiModalService} from '@taiga-ui/core/components/modal';

import {
    TuiNotificationMiddleComponent,
    type TuiNotificationMiddleOptions,
} from './notification-middle.component';

@Injectable({
    providedIn: 'root',
})
export class TuiNotificationMiddleService extends TuiModalService<TuiNotificationMiddleOptions> {
    protected readonly options = {closable: false};
    protected readonly content = TuiNotificationMiddleComponent;
}
