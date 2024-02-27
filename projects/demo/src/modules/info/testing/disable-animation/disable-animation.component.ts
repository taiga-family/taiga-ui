import {NgForOf, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
    TuiAddonDocModule,
    TuiDocDocumentationModule,
    TuiDocPageModule,
} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiTabsModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'disable-animation',
    imports: [
        NgForOf,
        TuiDocDocumentationModule,
        TuiDocPageModule,
        TuiLinkModule,
        TuiTabsModule,
        TuiAddonDocModule,
        NgIf,
    ],
    templateUrl: './disable-animation.template.html',
    styleUrls: ['./disable-animation.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DisableAnimationComponent {
    protected readonly cypress = import('./examples/cypress.md?raw');
    protected readonly playwright = import('./examples/playwright.md?raw');
}
