import {ClipboardModule} from '@angular/cdk/clipboard';
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiButtonDirective, TuiExpand, TuiLinkDirective} from '@taiga-ui/core';
import {tuiKitIcons} from '@taiga-ui/icons';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiLinkDirective,
        RouterLink,
        TuiButtonDirective,
        TuiExpand,
        ClipboardModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class PageComponent {
    protected readonly docRoutes = DemoRoute;
    protected readonly options = import('./examples/4/app.module.md?raw');

    protected readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
        // eslint-disable-next-line @taiga-ui/experience/strict-tui-doc-example
        './assets/icons/keyboard_arrow_right-24px.svg': import(
            '../../../../assets/icons/keyboard_arrow_right-24px.svg?raw'
        ),
    };

    protected readonly example2: TuiDocExample = {
        // eslint-disable-next-line @taiga-ui/experience/strict-tui-doc-example
        'process-icons.js': import('./examples/2/process-icons.js.md?raw'),
        // eslint-disable-next-line @taiga-ui/experience/strict-tui-doc-example
        'process-icons.ts': import('./examples/2/process-icons.ts.md?raw'),
    };

    protected readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        TypeScript: import('./examples/3/index.ts?raw'),
        // eslint-disable-next-line @taiga-ui/experience/strict-tui-doc-example
        './assets/icons/polygon.svg': import('../../../../assets/icons/polygon.svg?raw'),
    };

    protected readonly names = Object.keys(tuiKitIcons);

    protected expanded = false;

    protected toggle(): void {
        this.expanded = !this.expanded;
    }
}
