import {inject, Injectable} from '@angular/core';
import {TuiPortal} from '@taiga-ui/cdk/portals';
import {TuiPopupService} from '@taiga-ui/core/directives/popup';

import {TuiAlertComponent} from './alert.component';
import {type TuiAlertOptions} from './alert.interfaces';
import {TUI_ALERT_OPTIONS} from './alert.tokens';

@Injectable({
    providedIn: 'root',
    deps: [TuiPopupService],
    useClass: TuiAlertService,
})
export class TuiAlertService extends TuiPortal<TuiAlertOptions<any>> {
    protected override readonly options = inject(TUI_ALERT_OPTIONS);
    protected override readonly component = TuiAlertComponent;
}
