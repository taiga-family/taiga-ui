import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiDocPage} from '@taiga-ui/addon-doc';
import {TUI_VERSION} from '@taiga-ui/cdk';

import MigrationGuideActions from './actions';
import MigrationGuidePrerequisites from './prerequisites';
import MigrationGuideTroubleshooting from './troubleshooting';

@Component({
    imports: [
        FormsModule,
        MigrationGuideActions,
        MigrationGuidePrerequisites,
        MigrationGuideTroubleshooting,
        TuiDemo,
        TuiDocPage,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected tuiMajor = Number.parseInt(TUI_VERSION);
}
`;export{e as default};
