import {Inject, Injectable} from '@angular/core';
import {
    AbstractTuiNotificationsGroupService,
    TUI_NOTIFICATION_OPTIONS,
    TuiNotificationDefaultOptions,
} from '@taiga-ui/core';

@Injectable()
export class ToastrService extends AbstractTuiNotificationsGroupService {
    constructor(
        @Inject(TUI_NOTIFICATION_OPTIONS)
        protected readonly defaultOptions: TuiNotificationDefaultOptions,
    ) {
        super();
    }
}
