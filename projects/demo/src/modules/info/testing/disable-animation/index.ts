import {NgForOf, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
    TuiAddonDocModule,
    TuiDocDocumentationModule,
    TuiDocPageModule,
} from '@taiga-ui/addon-doc';
import {TuiLinkDirective} from '@taiga-ui/core';
import {TuiTabsModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        TuiDocDocumentationModule,
        TuiDocPageModule,
        TuiLinkDirective,
        TuiTabsModule,
        TuiAddonDocModule,
        NgIf,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PageComponent {
    protected readonly cypress = import('./examples/cypress.md?raw');
    protected readonly playwright = import('./examples/playwright.md?raw');
}
