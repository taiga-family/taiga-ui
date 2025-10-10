import {ChangeDetectionStrategy, Component} from '@angular/core';
import {tuiAsPortal, TuiPortals} from '@taiga-ui/cdk/portals';

import {TuiPopupService} from './popup.service';

@Component({
    standalone: true,
    selector: 'tui-popups',
    template: '<ng-content/><ng-container #vcr />',
    styleUrl: './popups.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsPortal(TuiPopupService)],
})
export class TuiPopups extends TuiPortals {}
