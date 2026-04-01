import"./chunk-HU6DUUP4.js";var t=`import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiButton} from '@taiga-ui/core';
import {TuiNotificationMiddle} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiDemo, TuiNotificationMiddle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Page {
    protected routes = DemoRoute;
    protected readonly examples = ['Default', 'Content', 'Transition', 'Service'];
    protected readonly open = signal(false);

    protected closable = false;
}
`;export{t as default};
