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

    protected readonly iconVariants = [
        '',
        ...TUI_USED_ICONS,
        'https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/github.svg',
        "\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polygon points='1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6'/><line x1='8' y1='2' x2='8' y2='18'/><line x1='16' y1='6' x2='16' y2='22'/></svg>\"",
    ];

    protected readonly colorVariants = ['', 'var(--tui-text-primary)', 'red', '#3aa981'];

    protected readonly examples = [
        'Basic',
        'External',
        'Two colors',
        'Bundled',
        'Resolver',
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
