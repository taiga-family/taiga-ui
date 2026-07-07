import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiProvide} from '@taiga-ui/cdk';
import {TuiPopups, TuiPopupService} from '@taiga-ui/core';

import {CustomPortalService} from './service';

@Component({
    selector: 'custom-host',
    imports: [TuiPopups],
    template: '<tui-popups />',
    styles: `
        :host {
            position: absolute;
            inset: 0;
            pointer-events: none;
            transform: translate3d(0, 0, 0);
        }
    `,
    changeDetection,
    providers: [tuiProvide(TuiPopupService, CustomPortalService)],
})
export class CustomHost {}
