import"./chunk-B4AJQJMI.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TUI_VERSION} from '@taiga-ui/cdk';
// eslint-disable-next-line @taiga-ui/experience-next/no-deep-imports
import cdkPackage from '@taiga-ui/cdk/package.json';
import {TuiNotification} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/kit';

import {TuiAccordionTarget} from './target';

@Component({
    imports: [TuiAccordion, TuiAccordionTarget, TuiDemo, TuiNotification],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected tuiMajor = parseInt(TUI_VERSION);
    protected ngMajor = parseInt(
        cdkPackage.peerDependencies['@angular/core'].replaceAll(/^\\D+/g, ''),
    );

    protected readonly routes = DemoRoute;
    protected readonly manuallyTriggerNxMigration =
        import('./examples/manual-trigger-nx-migrate.md').then((x) => ({
            default: x.default.replace('x.x.x', \`\${this.tuiMajor - 1}.0.0\`),
        }));
}
`;export{o as default};
