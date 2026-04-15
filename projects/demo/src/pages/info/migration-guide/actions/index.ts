import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TUI_VERSION} from '@taiga-ui/cdk';
import {TuiCheckbox, TuiLabel, TuiLink} from '@taiga-ui/core';

@Component({
    selector: 'migration-guide-actions',
    imports: [FormsModule, TuiCheckbox, TuiDocExample, TuiLabel, TuiLink],
    templateUrl: './index.html',
    styles: `
        [tuiLabel]:not(:first-child) {
            margin-block-start: 1rem;
        }
    `,
    changeDetection,
})
export default class MigrationGuideActions {
    protected readonly tuiMajor = Number.parseInt(TUI_VERSION);

    protected readonly runMigration = {
        'Angular CLI': import('../examples/angular-cli.md'),
        'Nx CLI': import('../examples/nx-cli.md'),
    };
}
