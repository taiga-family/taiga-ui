import {ChangeDetectionStrategy, Component} from '@angular/core';
import {tuiAsPortal, TuiPortals} from '@taiga-ui/cdk/classes';

import {TuiPopupService} from './popup.service';

@Component({
    standalone: true,
    selector: 'tui-popups',
    template: '<ng-container #viewContainer />',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsPortal(TuiPopupService)],
})
export class TuiPopups extends TuiPortals {}
