import"./chunk-HU6DUUP4.js";var e=`import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiButton,
    TuiNotification,
    TuiNotificationService,
    TuiTitle,
} from '@taiga-ui/core';

import {CustomHost} from './portal';
import {CustomPortalService} from './service';

@Component({
    selector: 'tui-portals-example-2',
    imports: [CustomHost, TuiButton, TuiNotification, TuiTitle],
    templateUrl: './index.html',
    changeDetection,
    providers: [{provide: TuiNotificationService, deps: [CustomPortalService]}],
})
export default class Example {
    protected readonly show = signal(false);
}
`;export{e as default};
