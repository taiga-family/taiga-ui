import"./chunk-B4AJQJMI.js";var o=`import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDemo} from '@demo/utils';
import {TuiTabs} from '@taiga-ui/kit';

@Component({
    imports: [TuiDemo, TuiTabs],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
    protected readonly cypress = import('./examples/cypress.md');
    protected readonly playwright = import('./examples/playwright.md');
}
`;export{o as default};
