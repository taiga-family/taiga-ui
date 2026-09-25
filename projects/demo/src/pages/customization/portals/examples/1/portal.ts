import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiPortals, TuiPortalService, tuiProvide, TuiVCR} from '@taiga-ui/cdk';

import {CustomPortalService} from './service';

/**
 * Put me inside TuiRoot:
 * <tui-root>
 *     <custom-host ngProjectAs="tuiOverContent" />
 * </tui-root>
 */
@Component({
    selector: 'custom-host',
    imports: [TuiVCR],
    template: '<ng-container tuiVCR />',
    styles: `
        :host {
            position: fixed;
            display: flex;
            inset-block-start: env(safe-area-inset-top);
            flex-direction: column;
            align-items: center;
            block-size: 0;
            inline-size: 100%;
        }
    `,
    changeDetection,
    providers: [tuiProvide(TuiPortalService, CustomPortalService)],
})
export class CustomHost extends TuiPortals {}
