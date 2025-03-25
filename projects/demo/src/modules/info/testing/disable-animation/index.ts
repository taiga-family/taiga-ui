import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDemo} from '@demo/utils';
import {TuiLink} from '@taiga-ui/core';
import {TuiTabs} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiLink, TuiTabs],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
    protected readonly cypress = import('./examples/cypress.md?raw');
    protected readonly playwright = import('./examples/playwright.md?raw');
}
