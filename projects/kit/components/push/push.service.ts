import {inject, Injectable} from '@angular/core';
import {TuiPortal} from '@taiga-ui/cdk/portals';
import {TuiPopupService} from '@taiga-ui/core/directives/popup';

import {TUI_PUSH_OPTIONS, type TuiPushOptions} from './push.options';
import {TuiPushAlert} from './push-alert.component';

@Injectable({
    providedIn: 'root',
    deps: [TuiPopupService],
    useClass: TuiPushService,
})
export class TuiPushService extends TuiPortal<TuiPushOptions, string> {
    protected override readonly options = inject(TUI_PUSH_OPTIONS);
    protected override readonly component = TuiPushAlert;
}
