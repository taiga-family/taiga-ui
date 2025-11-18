import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDemo} from '@demo/utils';
import {TuiLink} from '@taiga-ui/core';
import {TuiTabs} from '@taiga-ui/kit';

@Component({
    imports: [TuiDemo, TuiLink, TuiTabs],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
    protected readonly cypress = import('./examples/cypress.md');
    protected readonly playwright = import('./examples/playwright.md');
}
