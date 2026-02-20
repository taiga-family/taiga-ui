import"./chunk-HU6DUUP4.js";var o=`import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDemo} from '@demo/utils';

@Component({
    imports: [TuiDemo],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
    protected readonly content = {
        'cypress.config.ts': import('./examples/cypress.md'),
        'playwright.config.ts': import('./examples/playwright.md'),
    };
}
`;export{o as default};
