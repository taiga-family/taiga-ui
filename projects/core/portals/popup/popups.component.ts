import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiPortals, TuiPortalService} from '@taiga-ui/cdk/portals';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';

import {TuiPopupService} from './popup.service';

@Component({
    selector: 'tui-popups',
    template: '<ng-content/><ng-container #vcr />',
    styleUrl: './popups.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(TuiPortalService, TuiPopupService)],
})
export class TuiPopups extends TuiPortals {}
