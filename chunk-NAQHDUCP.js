import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TUI_VERSION} from '@taiga-ui/cdk';
import {TuiCheckbox, TuiLabel, TuiLink} from '@taiga-ui/core';

@Component({
    selector: 'migration-guide-prerequisites',
    imports: [FormsModule, TuiCheckbox, TuiLabel, TuiLink],
    templateUrl: './index.html',
    styles: \`
        [tuiLabel]:not(:first-child) {
            margin-block-start: 1rem;
        }
    \`,
    changeDetection,
})
export default class MigrationGuidePrerequisites {
    protected readonly tuiMajor = Number.parseInt(TUI_VERSION);
}
`;export{o as default};
