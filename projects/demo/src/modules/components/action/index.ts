import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAddonDocModule, type TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiActionModule} from '@taiga-ui/kit';

import {TuiActionExample1} from './examples/1';
import {TuiActionExample2} from './examples/2';
import {TuiActionExample3} from './examples/3';
import {TuiActionExample4} from './examples/4';
import {TuiActionExample5} from './examples/5';

@Component({
    standalone: true,
    imports: [
        TuiAddonDocModule,
        TuiNotificationModule,
        RouterLink,
        TuiLinkModule,
        TuiActionExample1,
        TuiActionExample2,
        TuiActionExample3,
        TuiActionExample4,
        TuiActionExample5,
        TuiActionModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class PageComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    protected readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        TypeScript: import('./examples/2/index.ts?raw'),
    };

    protected readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
        TypeScript: import('./examples/3/index.ts?raw'),
    };

    protected readonly example4: TuiDocExample = {
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
        TypeScript: import('./examples/4/index.ts?raw'),
    };

    protected readonly example5: TuiDocExample = {
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
        TypeScript: import('./examples/5/index.ts?raw'),
    };

    protected readonly iconVariants = [
        'tuiIconPrinterLarge',
        'tuiIconLoginLarge',
        'tuiIconCalendarLarge',
    ];

    protected icon = this.iconVariants[0];

    protected color = 'var(--tui-link)';
    protected background = 'var(--tui-base-02)';
}
