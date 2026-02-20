import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiPortals, TuiPortalService, tuiProvide} from '@taiga-ui/cdk';

import {CustomPortalService} from './service';

@Component({
    selector: 'custom-host',
    template: '<ng-container #vcr />',
    styles: \`
        :host {
            position: fixed;
            display: flex;
            flex-direction: column;
            align-items: center;
            top: env(safe-area-inset-top);
            height: 0;
            width: 100%;
        }
    \`,
    changeDetection,
    providers: [tuiProvide(TuiPortalService, CustomPortalService)],
})
export class CustomHost extends TuiPortals {}
`;export{o as default};
