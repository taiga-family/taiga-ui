import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'variables',
    templateUrl: './variables.template.html',
    changeDetection,
})
export class VariablesComponent {
    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly vars: Record<string, string> = {
        '--tui-autofill': 'color for native browser autofill',
        '--tui-disabled-opacity': 'amount of transparency for disabled elements',
        '--tui-font-heading': 'font for headings',
        '--tui-font-text': 'font for text',
        '--tui-height-l': 'large elements height (i.e. inputs, buttons)',
        '--tui-height-m': 'default elements height (i.e. inputs, buttons)',
        '--tui-height-s': 'small elements height (i.e. small inputs)',
        '--tui-height-xs': 'smallest elements height (i.e. small button, badges)',
        '--tui-padding-l': 'padding for inputs with size "l"',
        '--tui-padding-m': 'padding for inputs with size "m"',
        '--tui-padding-s': 'padding for inputs with size "s"',
        '--tui-radius-l': 'border radius for containers (i.e. island, accordion)',
        '--tui-radius-m': 'default border radius',
        '--tui-radius-s': 'border radius for small elements (i.e. tags)',
        '--tui-radius-xs': 'border radius for smallest items (i.e. small checkbox)',
    };
}
