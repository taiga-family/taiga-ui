import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TUI_VERSION} from '@taiga-ui/cdk';
import {TuiCheckbox, TuiLabel, TuiNotification} from '@taiga-ui/core';
import {TuiAccordion, TuiBadge} from '@taiga-ui/kit';

import {TuiAccordionTarget} from './target';

@Component({
    imports: [
        FormsModule,
        TuiAccordion,
        TuiAccordionTarget,
        TuiBadge,
        TuiCheckbox,
        TuiDemo,
        TuiLabel,
        TuiNotification,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected tuiMajor = parseInt(TUI_VERSION);

    protected readonly routes = DemoRoute;

    protected readonly runMigration = {
        'Angular CLI': import('./examples/angular-cli.md'),
        'Nx CLI': import('./examples/nx-cli.md'),
    };

    protected readonly manuallyTriggerNxMigration =
        import('./examples/manual-trigger-nx-migrate.md').then((x) => ({
            default: x.default.replace('x.x.x', `${this.tuiMajor - 1}.0.0`),
        }));
}
