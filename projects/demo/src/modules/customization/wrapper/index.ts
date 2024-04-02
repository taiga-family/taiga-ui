import {ClipboardModule} from '@angular/cdk/clipboard';
import {NgForOf} from '@angular/common';
import {Component, ViewEncapsulation} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiDocCopyModule,
    type TuiDocExample,
    TuiDocExampleModule,
    TuiDocPageModule,
} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

import {TuiWrapperExample1} from './examples/1';

@Component({
    standalone: true,
    imports: [
        TuiDocPageModule,
        NgForOf,
        TuiDocCopyModule,
        ClipboardModule,
        RouterLink,
        TuiLinkModule,
        TuiDocExampleModule,
        TuiWrapperExample1,
    ],
    templateUrl: './index.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class PageComponent {
    protected readonly example1: TuiDocExample = {
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
