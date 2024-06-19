import {ClipboardModule} from '@angular/cdk/clipboard';
import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiLink} from '@taiga-ui/core';

import {TuiWrapperExample1} from './examples/1';

@Component({
    standalone: true,
    imports: [TuiDemo, ClipboardModule, TuiLink, TuiWrapperExample1],
    templateUrl: './index.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Page {
    protected readonly example1 = {
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
    };

    protected readonly mixins = [
        '.wrapper-hover(@ruleset)',
        '.wrapper-active(@ruleset)',
        '.wrapper-readonly(@ruleset)',
        '.wrapper-disabled(@ruleset)',
        '.wrapper-focus(@ruleset)',
        '.wrapper-invalid(@ruleset)',
    ];
}
