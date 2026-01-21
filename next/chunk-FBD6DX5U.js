import"./chunk-B4AJQJMI.js";var i=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TUI_VERSION} from '@taiga-ui/cdk';
import {TuiNotification, TuiTitle} from '@taiga-ui/core';
import {TuiAccordion, TuiBadge, TuiCheckbox} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

import {TuiAccordionTarget} from './target';

@Component({
    imports: [
        FormsModule,
        TuiAccordion,
        TuiAccordionTarget,
        TuiBadge,
        TuiCardLarge,
        TuiCheckbox,
        TuiDemo,
        TuiHeader,
        TuiNotification,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected tuiMajor = parseInt(TUI_VERSION);

    protected readonly routes = DemoRoute;

    protected readonly runMigration = import('./examples/run-migration.md');

    protected readonly manuallyTriggerNxMigration =
        import('./examples/manual-trigger-nx-migrate.md').then((x) => ({
            default: x.default.replace('x.x.x', \`\${this.tuiMajor - 1}.0.0\`),
        }));
}
`;export{i as default};
