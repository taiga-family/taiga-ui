import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiAccordion} from '@taiga-ui/kit';

import {TuiAccordionTarget} from './target';

@Component({
    imports: [TuiAccordion, TuiAccordionTarget, TuiDemo],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected readonly pages = DemoRoute;

    protected readonly manuallyTriggerNxMigration = import(
        './examples/manual-trigger-nx-migrate-v4.md'
    );
}
