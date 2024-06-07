import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiLinkDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiLinkDirective, RouterLink],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
        'content.ts': import('./examples/5/content.ts?raw'),
        'content.less': import('./examples/5/content.less?raw'),
    };

    protected readonly routes = DemoRoute;
}
