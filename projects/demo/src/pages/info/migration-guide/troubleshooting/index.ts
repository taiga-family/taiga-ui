import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TUI_VERSION} from '@taiga-ui/cdk';
import {TuiNotification} from '@taiga-ui/core';
import {TuiAccordion, TuiBadge} from '@taiga-ui/kit';

import {TuiAccordionTarget} from '../target';

@Component({
    selector: 'migration-guide-troubleshooting',
    imports: [
        FormsModule,
        TuiAccordion,
        TuiAccordionTarget,
        TuiBadge,
        TuiDemo,
        TuiNotification,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class MigrationGuideTroubleshooting {
    protected tuiMajor = Number.parseInt(TUI_VERSION);

    protected readonly routes = DemoRoute;

    protected readonly manuallyTriggerNxMigration =
        import('../examples/manual-trigger-nx-migrate.md').then((x) => ({
            default: x.default.replace('x.x.x', `${this.tuiMajor - 1}.0.0`),
        }));
}
