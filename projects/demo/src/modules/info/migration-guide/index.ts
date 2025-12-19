import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiAccordion} from '@taiga-ui/kit';

import {OpenOnRouteFragment} from './open-accordion-on-route-fragment';

@Component({
    standalone: true,
    imports: [OpenOnRouteFragment, TuiAccordion, TuiDemo],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    protected readonly pages = DemoRoute;

    protected readonly manuallyTriggerNxMigration =
        import('./examples/manual-trigger-nx-migrate-v4.md?raw');
}
