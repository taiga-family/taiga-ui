import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiPortals, TuiPortalService, tuiProvide, TuiVCR} from '@taiga-ui/cdk';

import {CustomPortalService} from './service';

@Component({
    selector: 'custom-host',
    imports: [TuiVCR],
    template: '<ng-container tuiVCR />',
    styles: `
        :host {
            position: fixed;
            display: flex;
            flex-direction: column;
            align-items: center;
            top: env(safe-area-inset-top);
            height: 0;
            width: 100%;
        }
    `,
    changeDetection,
    providers: [tuiProvide(TuiPortalService, CustomPortalService)],
})
export class CustomHost extends TuiPortals {}
