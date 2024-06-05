import {ClipboardModule} from '@angular/cdk/clipboard';
import {KeyValuePipe} from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {type TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiLinkDirective} from '@taiga-ui/core';

import {TuiVariablesExample1} from './examples/1';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiLinkDirective,
        KeyValuePipe,
        ClipboardModule,
        RouterLink,
        TuiVariablesExample1,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    protected readonly vars: Record<string, string> = {
        '--tui-font-heading': 'font for headings',
        '--tui-font-text': 'font for text',
        '--tui-radius-xs': 'border radius for smallest items (i.e. small checkbox)',
        '--tui-radius-s': 'border radius for small elements (i.e. tags)',
        '--tui-radius-m': 'default border radius',
        '--tui-radius-l': 'border radius for containers (i.e. island, accordion)',
        '--tui-height-xs': 'smallest elements height (i.e. small button, badges)',
        '--tui-height-s': 'small elements height (i.e. small inputs)',
        '--tui-height-m': 'default elements height (i.e. inputs, buttons)',
        '--tui-height-l': 'large elements height (i.e. inputs, buttons)',
        '--tui-padding-s': 'padding for inputs with size "s"',
        '--tui-padding-m': 'padding for inputs with size "m"',
        '--tui-padding-l': 'padding for inputs with size "l"',
        '--tui-disabled-opacity': 'amount of transparency for disabled elements',
        '--tui-autofill': 'color for native browser autofill',
    };

    protected readonly docRoutes = DemoRoute;
}
