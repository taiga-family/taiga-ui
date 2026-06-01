import"./chunk-HU6DUUP4.js";var t=`import {ClipboardModule} from '@angular/cdk/clipboard';
import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiLink} from '@taiga-ui/core';

import Example from './examples/1';

@Component({
    imports: [ClipboardModule, Example, TuiDemo, TuiLink],
    templateUrl: './index.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Page {
    protected readonly example1 = {
        HTML: import('./examples/1/index.html'),
        LESS: import('./examples/1/index.less'),
        TypeScript: import('./examples/1/index.ts?raw', {with: {loader: 'text'}}),
    };

    protected readonly mixins = [
        '.appearance-hover(@ruleset)',
        '.appearance-active(@ruleset)',
        '.appearance-disabled(@ruleset)',
        '.appearance-focus(@ruleset)',
    ];

    protected readonly routes = DemoRoute;
}
`;export{t as default};
