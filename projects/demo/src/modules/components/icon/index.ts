import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TUI_USED_ICONS} from '@taiga-ui/cdk';
import {TuiIcon} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/kit';
import {tuiInputNumberOptionsProvider} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiAccordion, TuiDemo, TuiIcon],
    templateUrl: './index.html',
    changeDetection,
    providers: [tuiInputNumberOptionsProvider({min: 0})],
})
export default class Page {
    protected readonly lucide = import('./examples/import/lucide.md?raw');
    protected readonly material = import('./examples/import/material.md?raw');
    protected readonly fontAwesome = import('./examples/import/font-awesome.md?raw');

    protected readonly iconVariants = ['', ...TUI_USED_ICONS];
    protected readonly colorVariants = ['', 'var(--tui-text-primary)', 'red', '#3aa981'];

    protected readonly examples = [
        'Basic',
        'External',
        'Two colors',
        'Bundled',
        'Resolver',
        'Base64',
    ];

    protected readonly descriptions = [
        '',
        '',
        '',
        'You can provide SVG source code in a dictionary to be bundled with the app',
        'IMPORTANT: Icon names are not allowed to have "/" symbol',
    ];

    protected icon = '@tui.heart';
    protected backgroundIcon = '';
    protected color = this.colorVariants[1]!;
    protected backgroundColor = '';
    protected size = 24;
}
