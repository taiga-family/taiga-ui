import {inject, Injectable} from '@angular/core';
import {type TuiPortalService} from '@taiga-ui/cdk/portals';
import {TuiAlertService} from '@taiga-ui/core/portals/alert';
import {TuiPopupService} from '@taiga-ui/core/portals/popup';

import {
    TUI_PUSH_CONCURRENCY,
    TUI_PUSH_OPTIONS,
    type TuiPushOptions,
} from './push.options';
import {TuiPushAlert} from './push-alert.component';

@Injectable({providedIn: 'root', deps: [TuiPopupService], useClass: TuiPushService})
export class TuiPushService extends TuiAlertService<TuiPushOptions, string> {
    protected override readonly options = inject(TUI_PUSH_OPTIONS);
    protected override readonly component = TuiPushAlert;

    // eslint-disable-next-line @angular-eslint/prefer-inject
    constructor(service: TuiPortalService) {
        super(inject(TUI_PUSH_CONCURRENCY), service);
    }
}
