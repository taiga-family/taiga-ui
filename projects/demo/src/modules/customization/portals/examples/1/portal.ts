import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiAsPortal, TuiPortals} from '@taiga-ui/cdk';

import {CustomPortalService} from './service';

@Component({
    standalone: true,
    selector: 'custom-host',
    template: '<ng-container #viewContainer />',
    styles: [
        `
            :host {
                position: fixed;
                display: flex;
                flex-direction: column;
                align-items: center;
                top: 0;
                height: 0;
                width: 100%;
            }
        `,
    ],
    changeDetection,
    providers: [tuiAsPortal(CustomPortalService)],
})
export class CustomHost extends TuiPortals {}
